export default class Household {
    constructor(arg) {
        this.h_id                             = arg.id || null; // Унікальний id домогосподарства
        this.h_room_id                        = arg.room_id || null; // Посилання на id приміщення відповідного домогосподарства
        this.h_household_number               = arg.household_number || null; // Номер домогосподарства
        this.h_household_member_count         = arg.household_member_count || null; // Кількість членів домогосподарства
        this.h_household_rooms                = arg.household_rooms || null; // Кількість зайнятих домогосподарством житлових кімнат
        this.h_household_room_parts           = arg.household_room_parts || null; // Кількість зайнятих домогосподарством частина кімнати
        this.h_ownership_type                 = arg.ownership_type || null; // Тип володіння житловим приміщенням (для одноквартирного будинку (індивідуального), частини одноквартирного будинку (індивідуального), окремої квартири, комунальної квартири)
        this.h_internet                       = arg.internet || null; // Доступ домогосподарства до мережі Інтернет (включаючи мобільний)
    }
}