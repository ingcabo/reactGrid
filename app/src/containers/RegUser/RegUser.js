
import React, {Component} from "react"
import { Form, Control, Errors } from "react-redux-form"
import { connect } from "react-redux"

import {maxLength,required,minLength,equealEmail} from  "../../components/global/Validation/index.js"
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


    render() {
        return (
            <Form
                model="myForms.user"
                validators={{
                    '': {
                        passwordsMatch: (vals) => vals.emailR ===  vals.email,
                    },
                }}

                onSubmit={(values) => this.handleSubmit(values)}
            >
                <div className="divCentrado">

                    <label>{lablex.userName}</label>
                    <Control.text
                        model="myForms.user.name"
                        placeholder={lablex.placeholderUserName}
                        required
                        validators={{
                            maxLength: maxLength(15)
                        }}
                    />
                    <Errors
                        className="errors"
                        model="myForms.user.name"
                        show="touched"
                        messages={{
                            valueMissing: lablex.ruleUserNameReq,
                            maxLength: lablex.ruleUsernameLong
                        }}
                    />

                    <div className="field">
                        <label>{lablex.lastUserName}</label>
                        <Control.text
                            model="myForms.user.lastName"
                            placeholder={lablex.placeholderLastName}
                            required
                            validators={{
                                maxLength: maxLength(15)
                            }}
                        />
                        <Errors
                            className="errors"
                            model="myForms.user.lastName"
                            show="touched"
                            messages={{
                                required: lablex.ruleUserNameLastUserNameReq,
                                maxLength: lablex.ruleLastUserNameLong,
                            }}
                        />
                    </div>
                    <label>{lablex.userName}</label>
                    <div>
                        <Control.select model="myForms.user.typeDoc" id="myForms.user.typeDoc" className="dniSelectClass">
                            <option value="green">Dni</option>
                            <option value="red">Pass</option>
                            <option value="blue">Cedula</option>
                        </Control.select>

                        <Control.text
                            className="dniImputClass"
                            model="myForms.user.dni"
                            placeholder={lablex.placeholderdni}
                            required
                            validators={{
                                maxLength: maxLength(15)
                            }}
                        />

                        <Errors
                            className="errors"
                            model="myForms.user.dni"
                            show="touched"
                            messages={{
                                required: lablex.ruleUserDniReq,
                                maxLength: lablex.ruleUserDniLong,
                            }}
                        />

                    </div>

                    <label>{lablex.emailUser}</label>
                    <Control
                        type="email"
                        model=".email"
                        placeholder="email@example.com"
                        required
                        validators={{
                            minLength: minLength(5)
                        }}
                    />
                    <Errors
                        className="errors"
                        model="myForms.user.email"
                        show="touched"
                        messages={{
                            valueMissing: lablex.ruleUserEmailReq,
                            typeMismatch: lablex.ruleUserEmailVal,
                            minLength: lablex.ruleUserEmailMinLong
                        }}
                    />

                    <label>{lablex.emailUserR}</label>
                    <Control
                        type="email"
                        model=".emailR"
                        placeholder="email@example.com"
                        required
                    />
                    <Errors
                        className="errors"
                        model="myForms.user.emailR"
                        show="touched"
                        messages={{
                            valueMissing: lablex.ruleUserEmailRreq,
                            typeMismatch: lablex.ruleUserEmailRval,
                            minLength: lablex.ruleUserEmailMinLong,
                            passwordsMatch:lablex.passwordsMatch
                        }}
                    />
                </div>

            </Form>
        )
    }
}
