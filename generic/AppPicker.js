import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  Button,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

function AppPicker({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
  color = colors.medium,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Icon name={icon} size={20} color={color} style={[styles.icon]} />
          )}
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}

          <Icon name="chevron-down" size={20} color={colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalView}>
          <Icon
            size={25}
            color="white"
            name="close"
            style={{marginRight: 10}}
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.viewContainer}>
            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 10,
                    width: '100%',
                    borderStyle: 'solid',
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={[styles.text, {width: '100%', textAlign: 'center'}]}
                    onPress={() => {
                      setModalVisible(false);
                      onSelectItem(item);
                    }}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',

    width: 'auto',
    padding: 7,
    marginVertical: 10,
  },

  modalView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  viewContainer: {
    width: Dimensions.get('window').width * 0.9,
    height: 150,
    justifyContent: 'center',

    borderRadius: 5,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
  },

  labels: {},
  icon: {
    marginRight: 5,
  },
  placeholder: {
    color: colors.medium,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  text: {
    color: colors.black,

    fontSize: 20,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default AppPicker;
