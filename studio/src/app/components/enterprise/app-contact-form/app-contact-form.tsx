import {Component, h, State} from '@stencil/core';

@Component({
  tag: 'app-contact-form',
  styleUrl: 'app-contact-form.scss',
  shadow: false,
})
export class AppContactForm {
  @State()
  private status: 'SUCCESS' | 'ERROR' | undefined = undefined;

  private submitForm($event) {
    $event.preventDefault();

    const form = $event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.status = 'SUCCESS';
      } else {
        this.status = 'ERROR';
      }
    };
    xhr.send(data);
  }

  render() {
    return (
      <section class="contact">
        <div class="content">
          <form onSubmit={($event) => this.submitForm($event)} action="https://formspree.io/xjvaebzk" method="POST">
            <p>Get in touch for a tailored discussion about your needs and pricing.</p>

            <ion-list class="inputs-list">
              <ion-item>
                <ion-input required={true} input-mode="text" name="company" placeholder="Your company *"></ion-input>
              </ion-item>

              <ion-item>
                <ion-input required={true} input-mode="text" name="name" placeholder="Your name *"></ion-input>
              </ion-item>

              <ion-item>
                <ion-input required={true} input-mode="email" name="_replyto" placeholder="Your email *"></ion-input>
              </ion-item>

              <ion-item>
                <ion-input input-mode="tel" name="phone" placeholder="Your phone"></ion-input>
              </ion-item>

              <ion-item>
                <ion-input input-mode="tel" name="employees" placeholder="Number of employees"></ion-input>
              </ion-item>

              <ion-item>
                <ion-textarea name="message" placeholder="Your message" rows={4}></ion-textarea>
              </ion-item>
            </ion-list>

            {this.status === 'SUCCESS' ? (
              <p style={{'padding-top': '16px', 'margin-bottom': '12px'}}>Thanks! We will come back to you asap.</p>
            ) : (
              <ion-button type="submit" color="primary" shape="round" class="ion-margin-top">
                Submit
              </ion-button>
            )}
            {this.status === 'ERROR' && <p style={{'padding-top': '16px', 'margin-bottom': '12px'}}>Ooops! There was an error.</p>}

            <div class="ion-margin-top">
              <small>* required field</small>
            </div>

            <p class="ion-margin-top address">
              {`DeckDeckGo
c/o The Hub Zürich Association
Sihlquai 131
8005 Zürich, Switzerland`}
            </p>
          </form>
        </div>
      </section>
    );
  }
}
