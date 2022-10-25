export function loadStatus() {
    let statusList = [
        {
            id: "new",
            name: "Новый",
        },
        {
            id: "calculation",
            name: "Рассчет",
        },
        {
            id: "confirmed",
            name: "Подтвержден",
        },
        {
            id: "postponed",
            name: "Отложен",
        },
        {
            id: "complete",
            name: "Выполнен",
        },
        {
            id: "canceled",
            name: "Отменен",
        },
    ];
    return statusList;
}
