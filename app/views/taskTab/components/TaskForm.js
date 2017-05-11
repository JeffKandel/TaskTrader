import React from 'react'
import { Text, Button, Content, Body, Form, Input, Label, Item } from 'native-base'

export default function TaskForm (props) {
  const { taskInput, changeTaskInput, bountyInput, changeBountyInput, createNewTask, group } = props.parentProps
  const { dispatch } = props.parentProps.navigation
  return (
    <Content>
      <Form>
        <Item stackedLabel>
          <Label>Task Description:</Label>
          <Input
            onChangeText={changeTaskInput}
            value={taskInput}
          />
        </Item>
        <Item stackedLabel>
          <Label>Bounty (1-100):</Label>
          <Input
            onChangeText={changeBountyInput}
            value={bountyInput}
          />
        </Item>
      </Form>
      <Body style={{flexDirection: 'row'}}>
        {
        taskInput && +bountyInput > 0 && +bountyInput <= 100
        ?
          <Button
            onPress={ () => {
              createNewTask(taskInput, group.id, 1, Math.round(+bountyInput))
              dispatch({type: 'JUMP_TO_TAB', index: 1})
            }}
            style={{flex: 1, maxWidth: 200, justifyContent: 'center'}}>
            <Text>Add Task</Text>
          </Button>
        : <Button disabled style={{flex: 1, maxWidth: 200, justifyContent: 'center'}}>
          <Text>Add Task</Text>
        </Button>
        }
      </Body>
    </Content>
  )
}
