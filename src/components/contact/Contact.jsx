import React from 'react'
import "./contact.scss"

export default function Contact() {
    return (
        <div className="contact">
            <form method="POST" data-netlify="true">
                <ul class="form-style-1">
                    <li><label>Full Name <span class="required">*</span></label><input type="text" name="field1" class="field-divided" placeholder="First" /> <input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
                    <li>
                        <label>Email <span class="required">*</span></label>
                        <input type="email" name="field3" class="field-long" />
                    </li>
                    <li>
                        <label>Subject</label>
                        <select name="field4" class="field-select">
                        <option value="Advertise">General</option>
                        <option value="Partnership">Opportunity</option>
                        <option value="General Question">Collaboration</option>
                        </select>
                    </li>
                    <li>
                        <label>Message <span class="required">*</span></label>
                        <textarea name="field5" id="field5" class="field-long field-textarea"></textarea>
                    </li>
                    <li>
                        <input type="submit" value="Submit" />
                    </li>
                </ul>
            </form>
        </div>
    )
}
