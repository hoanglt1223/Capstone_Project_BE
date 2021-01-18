// import {
//   Connection,
//   EntitySubscriberInterface,
//   EventSubscriber,
//   InsertEvent,
// } from 'typeorm'
// import { Component } from '../component.entity'
// import * as bcrypt from 'bcrypt'
// import { ConfigService } from '@nestjs/config'

// @EventSubscriber()
// export class ComponentSubscriber implements EntitySubscriberInterface<Component> {
//   private readonly bcryptSalt: number

//   constructor(connection: Connection, configService: ConfigService) {
//     connection.subscribers.push(this)
//     this.bcryptSalt = configService.get<number>('bcryptSalt')
//   }

//   // eslint-disable-next-line @typescript-eslint/ban-types
//   listenTo(): string | Function {
//     return Component
//   }

//   async beforeInsert(event: InsertEvent<Component>): Promise<void> {
//     const { password } = event.entity
//     event.entity.password = await bcrypt.hash(password, this.bcryptSalt)
//   }
// }
