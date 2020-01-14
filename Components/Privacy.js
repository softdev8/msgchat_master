import React, { Component } from 'react'
import { View, Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import StaticScreen from 'app/Components/StaticScreen'
import logoBlack from 'app/Images/logo_black.png'
import { injectIntl } from 'react-intl'
import m from 'commons/I18n'
import Text from 'app/Components/BaseText'

const s = EStyleSheet.create({
  paragraph: {
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
    lineHeight: '1.25rem'
  },

  subTitle: {
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
    fontSize: '1rem',
    fontWeight: '600'
  },

  bottomImageWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  bottomImage: {
    resizeMode: 'contain',
    width: 200
  }
})

class Privacy extends Component {
  render () {
    return (
      <StaticScreen navigation={this.props.navigation} title={this.props.intl.formatMessage(m.native.Setting.privacyPolicy)}>

        <Text style={s.paragraph}>MsgSafe.io (the “Company” or “We”) are committed to protecting the privacy of individuals and businesses using our products, services and global infrastructure (“Services”). MsgSafe.io has established this Privacy Policy to explain what information we collect through your use of our products, services and global infrastructure. By visiting MsgSafe.io and using the Services, you consent to the terms outlined by this privacy policy.</Text>
        <Text style={s.paragraph}>In this policy, "MsgSafe.io" refers to MsgSafe.io staff, management, interns, and consultants, all of whom are bound by law or contract to keep confidential information they receive as part of their assistance to MsgSafe.io.</Text>
        <Text style={s.subTitle}>Data related to the opening of an account</Text>
        <Text style={s.paragraph}>Any emails provided to MsgSafe.io optional email verification, or optional notification/recovery email setting in your account, are considered personal data. Such data will only be used to contact you with important notifications about MsgSafe.io, to send you invitation links to verify your accounts, to send you password recovery links, or to forward you email if you enable the option.</Text>
        <Text style={s.paragraph}>MsgSafe.io does not sell or rent member, visitor or service user information under any circumstances, and we do not share member, visitor or service user information without prior consent except as compelled by applicable regional laws.</Text>
        <Text style={s.subTitle}>Data collection</Text>
        <Text style={s.paragraph}>Our overriding policy is to collect as little user information as possible to ensure a completely private and anonymous user experience when using our Service.</Text>
        <Text style={s.paragraph}>MsgSafe.io endeavors to gather sufficient information for analyzing our services and how visitors use them without compromising the privacy of our visitors. This includes referrer pages, time stamps, page requested, user agent, language header and website visited.</Text>
        <Text style={s.paragraph}>Cookies: We do not use persistent ID cookies on this site or within the application. You can use Tor if you wish to keep your connection information anonymous. We do not use persistent ID cookies on this site. We use session cookies on certain portions of the application. Session cookies expire when you close your browser or your browser tab.</Text>
        <Text style={s.paragraph}>Voluntarily Submitted Information: In addition, MsgSafe.io collects and retains information you voluntarily submit to us. It is up to you whether to submit information to us, and how much information to provide.</Text>
        <Text style={s.subTitle}>MsgSafe.io's Use of Information</Text>
        <Text style={s.paragraph}>In general, MsgSafe.io uses the information provided by you to further its vision, including to protect privacy, defend freedom and innovation, and to protect your rights in the digital world.</Text>
        <Text style={s.paragraph}>Other activities: We may run surveys, contests, or similar activities through this site. Such information will be used for the purposes for which it was collected. We occasionally look at technical information to diagnose problems with or consider improvements to our servers or related technologies and to administer MsgSafe.io and other websites and services we host or provide.</Text>
        <Text style={s.subTitle}>Third-Party Service Providers to MsgSafe.io</Text>
        <Text style={s.paragraph}>MsgSafe.io relies on third-party credit card processing, Bitcoin and other transactions, so the Company necessarily must share payment information with third parties. Anonymous cash or bitcoin payments and donations are accepted.</Text>
        <Text style={s.paragraph}>For all of MsgSafe.io's service providers, hosting providers and credit card processors and any other providers we may use in the future, the information collected from MsgSafe.io users remains protected by the terms of our agreements with those providers.</Text>
        <Text style={s.subTitle}>Disclosure of Your Information</Text>
        <Text style={s.paragraph}>While MsgSafe.io endeavors to provide the highest level of protection for your information, we may disclose personally identifiable information about you to third parties in limited circumstances, including: (1) with your consent; or (2) when we have a good faith belief it is required by law, such as pursuant to a subpoena or other judicial or administrative order.</Text>
        <Text style={s.paragraph}>If we are required by law to disclose the information that you have submitted, we will attempt to provide you with prior notice (unless we are prohibited or it would be futile) that a request for your information has been made in order to give you an opportunity to object to the disclosure. We will attempt to provide this notice by email, if you have given us an email address.</Text>
        <Text style={s.subTitle}>Updating or Removing Your Information</Text>
        <Text style={s.paragraph}>You may choose to correct, update, or delete the membership information you have submitted to us by sending an email requesting changes to support@msgsafe.support. If you join any of our services, you may correct, update, or delete the information provided.</Text>
        <Text style={s.subTitle}>Changes to Our Policies</Text>
        <Text style={s.paragraph}>MsgSafe.io's Privacy Policy may change from time to time. However, any revised privacy policy will be consistent with MsgSafe.io's mission. If we make any substantive changes to our policies, we will place notice of changes on this page.</Text>

        <View style={s.bottomImageWrap}>
          <Image source={logoBlack} style={s.bottomImage} />
        </View>
      </StaticScreen>
    )
  }
}

export default injectIntl(Privacy)
