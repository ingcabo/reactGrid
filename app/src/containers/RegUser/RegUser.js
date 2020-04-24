
import React, {Component} from "react"
import { Form, Control, Errors } from "react-redux-form"
import { connect } from "react-redux"

import {maxLength,required,minLength,equealEmail,emailsMatch} from  "../../components/global/Validation/index.js"
import "../../components/global/css/regUser.css"
import txt from  "../../components/global/lenguaje/index.js"

//import DayPicker from "react-day-picker"

import "react-day-picker/lib/style.css"

var lablex = txt.regUser

export default class UserForm extends Component  {
    handleSubmit(values) {
    // Do anything you want with the form value
        console.log(values)
    }

    const dataMatch = ({ email, emailR }) => {
      return email === emailR;
    };

    render() {
        return (
            <Form
                model="myForms.user"
                validators={{
                  // '': {dataMatch}
                }}

                onSubmit={(values) => this.handleSubmit(values)}
            >
                <div className="divCentrado">

                    <label>{lablex.userName}</label>
                    <Control.text
                        model=".name"
                        placeholder={lablex.placeholderUserName}
                        required
                        validators={{
                            maxLength: maxLength(15)
                        }}
                    />
                    <Errors
                        className="errors"
                        model=".name"
                        show="touched"
                        messages={{
                            valueMissing: lablex.ruleUserLastNameReq,
                            maxLength: lablex.ruleUsernameLong
                        }}
                    />

                    <div className="field">
                        <label>{lablex.lastUserName}</label>
                        <Control.text
                            model=".lastName"
                            placeholder={lablex.placeholderLastName}
                            required
                            validators={{
                              maxLength: maxLength(15)
                            }}
                        />
                        <Errors
                            className="errors"
                            model=".lastName"
                            show="touched"
                            messages={{
                                valueMissing: lablex.ruleUserLastNameReq,
                                maxLength: lablex.ruleLastUserNameLong
                            }}
                        />
                    </div>
                    <label>{lablex.placeholderdni}</label>
                    <div>
                        <Control.select model="typeDoc" id=".typeDoc" className="dniSelectClass">
                            <option value="green">Dni</option>
                            <option value="red">Pass</option>
                            <option value="blue">Cedula</option>
                        </Control.select>

                        <Control.text
                            className="dniImputClass"
                            model=".dni"
                            placeholder={lablex.placeholderdni}
                            required
                            validators={{
                                maxLength: maxLength(15)
                            }}
                        />

                        <Errors
                            className="errors"
                            model=".dni"
                            show="touched"
                            messages={{
                                valueMissing: lablex.ruleUserDniReq,
                                maxLength: lablex.ruleUserDniLong,
                            }}
                        />

                    </div>

                    <label>{lablex.emailUser}</label>
                    <Control.text
                        type="email"
                        model=".email"
                        placeholder="email@example.com"
                        required
                    />
                    <Errors
                        className="errors"
                        model=".email"
                        id = ".email"
                        show="touched"
                        messages={{
                            valueMissing: lablex.ruleUserEmailReq,
                            typeMismatch: lablex.ruleUserEmailVal,
                            minLength: lablex.ruleUserEmailMinLong
                        }}
                    />

                    <label>{lablex.emailUserR}</label>
                    <Control.text
                        type="email"
                        model=".emailR"
                        id = ".emailR"
                        placeholder="email@example.com"
                        required
                        validators={{

                        }}
                    />
                    <Errors
                        className="text-danger"
                        model=".emailR"
                        show="touched"
                        messages={{
                            valueMissing: lablex.ruleUserEmailRreq,
                            typeMismatch: lablex.ruleUserEmailRval,
                            minLength: lablex.ruleUserEmailMinLong
                            //dataMatch:lablex.emailsMatch
                        }}
                    />
                </div>
              <button type="submit">Submit</button>
            </Form>
        )
    }
}
