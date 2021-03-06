export const createNewTaskWithBounty = (description, groupId, creatorId, amount) => {
  return (
    `query=mutation CreateTaskForGroup($task: tasksInput!, $bounty: bountiesInput!) {
      tasksCreate(tasks: $task) {
        id
        description
        status
        creator_id
        assignee_id
      }
      bountiesCreate(bounties: $bounty) {
        id
        amount
        user {
          id
          name
        }
      }
    }&operationName=CreateTaskForGroup&variables={
      "task": {
        "description": "${description}",
        "status": "Pending",
        "group_id": ${groupId},
        "creator_id": ${creatorId}
      },
      "bounty": {
        "amount": ${amount},
        "user_id": ${creatorId}
      }
    }`
  )
}

export const associateTaskAndBounty = (taskId, bountyId) => {
  return (
    `query=mutation LinkBountyWithTask($bountyTask: bountyTasksInput!) {
      bountyTasksCreate(bountyTasks: $bountyTask) {
        bounty_id
        task_id
      }
    }&operationName=LinkBountyWithTask&variables={
      "bountyTask": {
        "bounty_id": ${bountyId},
        "task_id": ${taskId}
      }
    }`
  )
}

export const createNewBounty = (amount, userId) => {
  return (
    `query=mutation AddBountyToTask($bounty: bountiesInput!) {
      bountiesCreate(bounties: $bounty) {
        id
        amount
        user_id
      }
    }&operationName=AddBountyToTask&variables={
      "bounty": {
        "amount": ${amount},
        "user_id": ${userId}
      }
    }`
  )
}

export const completeTask = taskId => {
  return (
    `query=mutation CompleteTask($task: tasksInput!) {
      tasksUpdate(tasks: $task) {
        id
        description
        status
      }
    }&operationName=CompleteTask&variables={
      "task": {
        "id": ${taskId},
        "status": "Processing"
      }
    }`
  )
}
