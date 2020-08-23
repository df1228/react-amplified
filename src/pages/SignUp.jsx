import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignIn, AmplifySignUp, AmplifySignOut } from "@aws-amplify/ui-react";
import { I18n } from "aws-amplify";
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

// class CustomSignUp extends AmplifySignUp {
class CustomSignUp {
    render() {
        return (
            <amplify-form-section
                headerText={I18n.get(this.headerText)}
                handleSubmit={this.handleSubmit}
                testDataPrefix={'sign-up'}
            >
                <div slot="subtitle">
                    <slot name="header-subtitle"></slot>
                </div>
                <amplify-auth-fields formFields={this.newFormFields} />
                <div class="sign-up-form-footer" slot="amplify-form-section-footer">
                    <slot name="footer">
                        <slot name="secondary-footer-content">
                            <span>
                                {I18n.get(this.haveAccountText)}{' '}
                                <amplify-button
                                    variant="anchor"
                                    onClick={() => this.handleAuthStateChange(AuthState.SignIn)}
                                    data-test="sign-up-sign-in-link"
                                >
                                    {I18n.get(this.signInText)}
                                </amplify-button>
                            </span>
                        </slot>
                        <slot name="primary-footer-content">
                            <amplify-button type="submit" data-test="sign-up-create-account-button">
                                {this.loading ? <amplify-loading-spinner /> : <span>{I18n.get(this.submitButtonText)}</span>}
                            </amplify-button>
                        </slot>
                    </slot>
                </div>
            </amplify-form-section>
        );
    }
}


export default CustomSignUp;