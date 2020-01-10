import React from 'react'
import { View, Platform, Button, TouchableOpacity } from 'react-native'
import HeaderBackButton from 'react-navigation/src/views/Header/HeaderBackButton'

import Text from 'app/Components/BaseText'
import { injectIntl } from 'react-intl'
import m from 'commons/I18n'
import styles from './styles'

const HeaderButton = ({
  title, onPress, color, isBack, intl, ...props
}) => {
  // Return react-navigation's back button component if –
  // isBack is true OR it's android and there's no or 'cancel' title
  if (isBack || ((!title || title === intl.formatMessage(m.app.Common.cancel)) && Platform.OS === 'android')) {
    if (Platform.OS === 'android') {
      return <HeaderBackButton title={title} onPress={onPress} {...props} />
    }

    return (
      <View {...props}>
        <HeaderBackButton title={title} onPress={onPress} {...props} />
      </View>
    )
  }

  if (Platform.OS === 'ios') {
    return <Button title={title} onPress={onPress} color={color} />
  }

  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <Text style={[styles.plainButtonText, { color }]}>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )
}

export default injectIntl(HeaderButton)
