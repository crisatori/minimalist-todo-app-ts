import { nanoid } from 'nanoid'

export default class TaskConstructor {
  id: string
  task: string
  isCompleted: boolean
  constructor (task: string) {
    this.task = task
    this.isCompleted = false
    this.id = nanoid(4)
  }
}
