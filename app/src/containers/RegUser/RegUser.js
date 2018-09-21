
import React, {Component} from "react"
import { Form, Control, Errors } from "react-redux-form"
import { connect } from "react-redux"
import "../../components/global/css/regUser.css"
import txt from  "../../components/global/lenguaje/index.js"
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

                onSubmit={(values) => this.handleSubmit(values)}
            >
                <div className="divCentrado">


                    <div className="#">
                        <label>{lablex.nameUser}</label>
                        <Control.text
                            model="myForms.user.name"
                            placeholder="your name"
                            required
                            validators={{ maxLength: (val) => val.length <= 15 }}
                            validateOn="blur"
                        />
                        <Errors
                            className="errors"
                            model="myForms.user.name"
                            show="touched"
                            messages={{
                                valueMissing: lablex.ruleUsernamereq,
                                maxLength: lablex.ruleUsernamelong
                            }}
                        />
                    </div>
                    <label>{lablex.lastnameUser}</label>
                    <Control.text
                        model="myForms.user.lastname"
                        placeholder="your Last name"
                    />
                    <div className="#">
                        <label>{lablex.emailUser}</label>
                        <Control
                            type="email"
                            model="myForms.user.email"
                            placeholder="email@example.com"
                            required
                            validateOn="blur"
                        />
                        <Errors
                            className="errors"
                            model="myForms.user.email"
                            show="touched"
                            messages={{
                                valueMissing: "Email is required",
                                typeMismatch: "Invalid email address",
                            }}
                        />
                    </div>
                </div>
            </Form>
        )
    }
}
