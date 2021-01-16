import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm'
import { User } from '../user.entity'
import * as bcrypt from 'bcrypt'
import { ConfigService } from '@nestjs/config'

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  private readonly bcryptSalt: number

  constructor(connection: Connection, configService: ConfigService) {
    connection.subscribers.push(this)
    this.bcryptSalt = configService.get<number>('bcryptSalt')
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  listenTo(): string | Function {
    return User
  }

  async beforeInsert(event: InsertEvent<User>): Promise<void> {
    const { password } = event.entity
    event.entity.password = await bcrypt.hash(password, this.bcryptSalt)
  }
}
