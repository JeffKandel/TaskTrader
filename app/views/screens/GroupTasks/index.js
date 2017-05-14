'use strict'
//  R/RN/NB components
import React from 'react'
import { StatusBar, Image } from 'react-native'
import { Text, Button, Container, Content, List, Icon, Grid, Col } from 'native-base'

// additional components
import AddFAB from '../../components/AddFAB'
import TaskListItem from '../../components/TaskListItem'

// styles and background image
import s from './styles'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'

// redux and dispatchers
import { connect } from 'react-redux'
import { selectGroup } from '../../../redux/reducers/groups'

class SingleGroup extends React.Component {
  componentDidMount() {
    const groupId = this.props.navigation.state.params.groupId
    this.props.selectGroup(groupId)
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Image source={welcomeScreenBg} style={s.imageContainer}>
        <StatusBar hidden={true} />
        <Content contentContainerStyle={s.content}>
        {(this.props.tasks.length)
        ?
          <List style={s.list}>
            {this.props.tasks.map( task => {
              return <TaskListItem
                key={task.id}
                task={task}
                navigate={navigate}
              />
            })}
          <Button iconLeft transparent style={s.filter}>
            <Icon style={s.midnightIcon} name="funnel"/>
            <Text style={s.midnight}>Filter Tasks</Text>
          </Button>
          </List>
        :
          <Grid style={s.grid}>
          <Col style={s.column}>
            <Text style={s.mainText}>No tasks yet</Text>
            <Text style={s.parenthetical}>(Add one below)</Text>
          </Col>
          </Grid>
        }
        <AddFAB
          navigate={navigate}
          location={'NewTask'}

        />
        </Content>
        </Image>
      </Container>
    )
  }
}


const mapState = state => {
  return {
    tasks: state.tasks.groupTasks
  }
}

const mapDispatch = {selectGroup}

export default connect(mapState, mapDispatch)(SingleGroup)


//   <Button transparent onPress={() => navigate('NewTask')}>
//     <Icon name="add-circle" />
//   </Button>
// </Header>

// <Tabs>
//   <Tab heading="Tasks">
//
//   </Tab>
//   <Tab heading="Members">
//     <MemberList />
//   </Tab>
// </Tabs>
