import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  Switch,
} from 'react-native'
type listProp = {
  id: number
  text: string
  complete: boolean
  edit: boolean
}
export default function App() {
  const [inputText, setInputText] = useState<string>('')
  const [list, setList] = useState<listProp[]>([])
  const addList = () => {
    if (!inputText) return Alert.alert('錯誤', '請輸入文字')
    setList([
      ...list,
      {
        id: new Date().getTime(),
        text: inputText,
        complete: false,
        edit: false,
      },
    ])
    setInputText('')
  }
  const delList = (id: number) => {
    setList(
      list.filter((v) => {
        return v.id !== id
      })
    )
  }
  const toggleSwitch = (id: number) => {
    setList(
      list.map((v) => {
        if (v.id === id) {
          v.complete = !v.complete
        }
        return v
      })
    )
  }
  const [editInput, setEditInput] = useState<string>('')
  const edittoggle = (state: boolean, id: number) => {
    setList(
      state
        ? list.map((v) => {
            if (v.id === id) {
              v.edit = true
              setEditInput(v.text)
            } else {
              v.edit = false
            }
            return v
          })
        : list.map((v) => {
            return { ...v, edit: false }
          })
    )
  }
  const edit = (id: number) => {
    setList(
      list.map((v) => {
        if (v.id === id) {
          v.text = editInput
          v.edit = false
        }
        return v
      })
    )
  }
  return (
    <SafeAreaView>
      <View style={styles.input}>
        <TextInput
          placeholder="請輸入事項"
          style={styles.inputContainer}
          value={inputText}
          onChangeText={(e) => {
            setInputText(e)
          }}
        />
        <TouchableOpacity style={styles.inputButton} onPress={addList}>
          <Text style={{ color: '#FFFFFF' }}>新增</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        {list.map(
          (v: {
            id: number
            text: string
            complete: boolean
            edit: boolean
          }) => {
            return (
              <View key={v.id}>
                {v.edit ? (
                  <View>
                    <TextInput
                      style={{
                        borderWidth: 1,
                      }}
                      value={editInput}
                      onChangeText={(e) => {
                        setEditInput(e)
                      }}
                    ></TextInput>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}
                    >
                      <TouchableOpacity
                        style={styles.listEditButton}
                        onPress={() => {
                          edit(v.id)
                        }}
                      >
                        <Text style={{ color: '#FFFFFF' }}>確認</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.listDelButton}
                        onPress={() => {
                          edittoggle(false, v.id)
                        }}
                      >
                        <Text style={{ color: '#FFFFFF' }}>取消</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <View>
                    <Text
                      style={{
                        textDecorationLine: v.complete
                          ? 'line-through'
                          : 'none',
                        color: v.complete ? 'red' : '#000000',
                      }}
                    >
                      {v.text}
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}
                    >
                      <TouchableOpacity
                        style={styles.listEditButton}
                        onPress={() => [edittoggle(true, v.id)]}
                      >
                        <Text style={{ color: '#FFFFFF' }}>修改</Text>
                      </TouchableOpacity>
                      <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={v.complete ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                          toggleSwitch(v.id)
                        }}
                        value={v.complete}
                      />
                      <TouchableOpacity
                        style={styles.listDelButton}
                        onPress={() => {
                          delList(v.id)
                        }}
                      >
                        <Text style={{ color: '#FFFFFF' }}>刪除</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            )
          }
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {},
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 30,
  },
  inputContainer: {
    width: 250,
    borderWidth: 1,
    paddingHorizontal: 20,
    elevation: 40,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
  },
  inputButton: {
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 50,
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  list: {
    margin: 30,
  },
  listEditButton: {
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 15,
  },
  listDelButton: {
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 15,
  },
})
