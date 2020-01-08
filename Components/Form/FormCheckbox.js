import React, { PureComponent } from 'react'
import { View } from 'react-native'
import CheckBox from 'react-native-check-box'
import Text from 'app/Components/BaseText'

class FormCheckbox extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      input: { value, onChange }, label, isChecked, onClick, disabled, ...otherProps
    } = this.props
    return (
      <View style={{
        flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'
      }}
      >
        <CheckBox
          isChecked={isChecked}
          onClick={onClick}
          disabled={disabled}
          {...otherProps}
          checkBoxColor='rgba(0,0,0, 0.7)'
        />
        <Text style={{ color: 'rgba(0,0,0, 0.7)' }}>
          {label}
        </Text>
      </View>
    )
  }
}

export default FormCheckbox
