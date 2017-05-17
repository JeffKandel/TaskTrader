'use strict'
import React from 'react'
import {
  Text,
  Button,
  Container,
  Content,
  List,
  ListItem,
  Body,
  Title,
  Icon
} from 'native-base'
import s from './styles'

export default ({ userGroups, selectGroup, members, orderMembers }) => {
  const sortedMembers = members.sort((a, b) => {
    console.log(a)
    var nameA = a.name.toUpperCase() // ignore upper and lowercase
    var nameB = b.name.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  })


  console.log(members)
  return (
    //sort userGroups(has points)
    //need to map userGroups to members
    //trigger state change to include members
    (
      <Button iconLeft transparent style={s.filter} onPress={() => orderMembers(sortedMembers)}>
        <Icon style={s.midnightIcon} name="funnel" />
        <Text style={s.midnight}>Sort Members</Text>
      </Button>
    )
  )
}
