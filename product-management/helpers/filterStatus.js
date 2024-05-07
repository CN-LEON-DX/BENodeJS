module.exports = (query) => {
    // If status is active the result will be 'Hoạt động'
    let filterStatus = [
        {
            name: "Tất cả",
            status: "",
            class: ""
        },
        {
            name: "Hoạt động",
            status: "active",
            class:""

        },
        {
            name: "Dừng hoạt động",
            status: "inactive",
            class:""

        },
        {
            name: "Flash sale",
            status: "flash",
            class:""
        }
    ];
    let status = query.status;
    if (status){
        const index = filterStatus.findIndex(item => item.status == status);
        filterStatus[index].class = "active";
        
    }else {
        const index = filterStatus.findIndex(item => item.status == "");
        filterStatus[index].class = "active";
    }

    return filterStatus;
}