import { injectable, inject } from 'tsyringe';

import IAppointmentsRepostory from '../repositories/IAppointmentsRepository';

// import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
  available: boolean;
}>;

@injectable()
class ListProviderMonthAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepostory
  ) {

  }

  public async execute({ provider_id, year, month }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentsRepository.findAllInMonthFromProvider({
      provider_id: provider_id,
      year,
      month,
    })

    console.log(appointments);

    return [
      { day: 1, available: false }
    ];
  }
}

export default ListProviderMonthAvailabilityService;
