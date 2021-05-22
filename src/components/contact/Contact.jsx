import React from 'react'
import "./contact.scss"

export default function Contact() {
    return (
        <div className="contact">
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <ul class="form-style-1">
                    <li>
                        <label>Full Name <span className="required">*</span></label>
                        <input type="text" name="first name" class="field-divided" placeholder="First" />
                        <input type="text" name="lastname" class="field-divided" placeholder="Last" /></li>
                    <li>
                        <label>Email <span className="required">*</span></label>
                        <input type="email" name="email" class="field-long" />
                    </li>
                    <li>
                        <label>Subject</label>
                        <select name="subject" className="field-select">
                            <option value="General">General</option>
                            <option value="Opportunity">Opportunity</option>
                            <option value="Collabortation">Collaboration</option>
                        </select>
                    </li>
                    <li>
                        <label>Message <span className="required">*</span></label>
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
