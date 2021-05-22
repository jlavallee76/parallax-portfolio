import React from 'react'
import "./contact.scss"

export default function Contact() {
    return (
        <div className="contact">
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <ul class="form-style-1">
                    <li>
                        <label>Full Name <span class="required">*</span></label>
                        <input type="text" name="first name" class="field-divided" placeholder="First" />
                        <input type="text" name="lastname" class="field-divided" placeholder="Last" /></li>
                    <li>
                        <label>Email <span class="required">*</span></label>
                        <input type="email" name="email" class="field-long" />
                    </li>
                    <li>
                        <label>Subject</label>
                        <select name="subject" class="field-select">
                            <option value="Advertise">General</option>
                            <option value="Partnership">Opportunity</option>
                            <option value="General Question">Collaboration</option>
                        </select>
                    </li>
                    <li>
                        <label>Message <span class="required">*</span></label>
                        <textarea name="message" id="message" class="field-long field-textarea"></textarea>
                    </li>
                    <li>
                        <input type="submit" value="Submit" />
                    </li>
                </ul>
            </form>
        </div>
    )
}
