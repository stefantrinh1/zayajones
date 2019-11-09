import React from "react"
import { useEffect } from "react"
import Styles from "./ContactForm.module.scss"

export default () => {
  useEffect(() => {
      console.log("testing")

    // get all data in form and return object
    function getFormData(form) {
      var elements = form.elements
      var honeypot

      var fields = Object.keys(elements)
        .filter(function(k) {
          if (elements[k].name === "honeypot") {
            honeypot = elements[k].value
            return false
          }
          return true
        })
        .map(function(k) {
          if (elements[k].name !== undefined) {
            return elements[k].name
            // special case for Edge's html collection
          } else if (elements[k].length > 0) {
            return elements[k].item(0).name
          }
        })
        .filter(function(item, pos, self) {
          return self.indexOf(item) == pos && item
        })

      var formData = {}
      fields.forEach(function(name) {
        var element = elements[name]

        // singular form elements just have one value
        formData[name] = element.value

        // when our element has multiple items, get their values
        if (element.length) {
          var data = []
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i)
            if (item.checked || item.selected) {
              data.push(item.value)
            }
          }
          formData[name] = data.join(", ")
        }
      })

      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields)
      formData.formGoogleSheetName = form.dataset.sheet || "responses" // default sheet name
      formData.formGoogleSend = form.dataset.email || "" // no email by default

      return { data: formData, honeypot: honeypot }
    }

    function handleFormSubmit(event) {
      // handles form submit without any jquery
      event.preventDefault() // we are submitting via xhr below
      var form = event.target
      var formData = getFormData(form)
      var data = formData.data

      // If a honeypot field is filled, assume it was done so by a spam bot.
      if (formData.honeypot) {
        return false
      }

      disableAllButtons(form)
      var forms = document.querySelectorAll(".contactfield")
      console.log(forms)
      forms.forEach((form) => {
          console.log(form)
        form.style.display = "none"
      })
      var url = form.action
      var xhr = new XMLHttpRequest()
      xhr.open("POST", url)
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset()
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none" // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message")
          if (thankYouMessage) {
            thankYouMessage.style.display = "block"
          }
        }
      }
      // url encode form data for sending as post data
      var encoded = Object.keys(data)
        .map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
        })
        .join("&")
      xhr.send(encoded)
    }

    function loaded() {
        console.log("loaded function run")
      // bind to the submit event of our form
      var forms = document.querySelectorAll("form.gform")
      for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", handleFormSubmit, false)
      }
    }
    document.addEventListener("DOMContentLoaded", loaded, false)

    function disableAllButtons(form) {
      var buttons = form.querySelectorAll("button")
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true
      }
      
    }

    // this function Activates all the functions above
    loaded()
  }, [])



  return (
    <section className={Styles.contactform}>
      <form
        className="gform" // Keep this as a non css module. the javascript relies on it.
        method="POST"
        action="https://script.google.com/macros/s/AKfycbzLXFjjomENPHNDKX0LcZQTavXYg5LNunhLZbAVoMYFII4OzSA/exec"
      >
        <div className={Styles.formdatafields}>
          <fieldset className="contactfield">
            <input id="name" name="name" placeholder="Name" />
          </fieldset>

          <fieldset className="contactfield">
            <input
              id="email"
              name="email"
              type="email"
              defaultValue=""
              required
              placeholder="Email Address"
            />
          </fieldset>

          <fieldset className="contactfield">
            <input id="color" name="color" placeholder="Contact Number" />
          </fieldset>

          <fieldset className="contactfield">
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Message"
            />
          </fieldset>

          <fieldset className="honeypot-field" style={{ display: "none" }}>
            <label htmlFor="honeypot">
              To help avoid spam, utilize a Honeypot technique with a hidden
              text field; must be empty to submit the form! Otherwise, we assume
              the user is a spam bot.
            </label>
            <input id="honeypot" type="text" name="honeypot" defaultValue="" />
          </fieldset>

          <button className="contactfield">
            SUBMIT
          </button>
        </div>

        <div className="thankyou_message" style={{ display: "none", color: "white", padding: "4em", textAlign: "center" }}>
          <h2>
            Thank You for contacting Me! I will get back to you soon!
          </h2>
        </div>
      </form>
    </section>
  )
}
