export default class Room {
    constructor(arg) {
        this.r_id                          = arg.id || null; // Ідентифікатор приміщення
        this.r_region                      = arg.region || null; // Регіон
        this.r_region_district             = arg.region_district || null; // Район
        this.r_united_community            = arg.united_community || null; // Об’єднана територіальна громада
        this.r_city                        = arg.city || null; // Міське поселення (місто, смт)
        this.r_city_district               = arg.city_district || null; // Район міста
        this.r_village_council             = arg.village_council || null; // Сільська рада
        this.r_village                     = arg.village || null; // Сільський населений пункт
        this.r_road_network_type           = arg.road_network_type || null; //Тип елементу вулично-дорожньої мережі
        this.r_street                      = arg.street || null; // Назва вулиці тощо
        this.r_house_number                = arg.house_number || null; // № будинку
        this.r_apartment_number            = arg.apartment_number || null; // № квартири
        this.r_building_type               = arg.building_type || null; // Тип будівлі та житлового приміщення
        this.r_rollingstock_building_type  = arg.rollingstock_building_type || null; // Якщо r_building_type був вибраний варіант 11
        this.r_boarding_building_type      = arg.boarding_building_type || null; // Якщо r_building_type був вибраний варіант ?????
        this.r_building_type_аnother       = arg.r_building_type_аnother || null; // Якщо r_building_type був вибраний варіант 12
        this.r_total_area                  = arg.total_area || null; // Розмір загальної площі житлового приміщення (у цілих кв.м)
        this.r_water_supply                = arg.water_supply || null; // Водопостачання
        this.r_toilet                      = arg.toilet || null; // Туалет
        this.r_toilet_other_households     = arg.toilet_other_households || null; // Якщо r_toilet був вибраний варіант 11 «чи користуєтесь Ви цим туалетом разом з іншими домогосподарствами»
        this.r_bath                        = arg.bath || null; // Ванна та (або) душ
        this.r_hot_water_supply            = arg.hot_water_supply || null; // Гаряче водопостачання
        this.r_sewage                      = arg.sewage || null; // Водовідведення (каналізація)
        this.r_kitchen                     = arg.kitchen || null; // Кухня або кухонний куток
        this.r_heating                     = arg.heating || null; // Опалення
        this.r_electricity_supply          = arg.electricity_supply || null; // Електропостачання
        this.r_electric_stove              = arg.electric_stove || null; // Електрична плита стаціонарна
        this.r_gas                         = arg.gas || null; // Газ
        this.r_garbage                     = arg.garbage || null; // Видалення побутових відходів
        this.r_garbage_аnother             = arg.garbage_аnother || null; // Якщо r_garbage був вибраний варіант 65
        this.r_сonstruction_building_time  = arg.сonstruction_building_time || null; // Період побудови будівлі
        this.r_walls_material              = arg.walls_material || null; // Матеріал зовнішніх стін будівлі
        this.r_households_count            = arg.households_count || null; // Кількість домогосподарств, що проживає у приміщенні

    }
}