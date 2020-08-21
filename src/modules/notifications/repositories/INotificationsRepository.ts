import ICreateNotificationDTO from '../dtos/ICreateNotificationDTO';
import Notification from '../infra/typeorm/schemas/Notification';

export default interface INotificaionsRepository {
  create(data: ICreateNotificationDTO): Promise<Notification>;
}
