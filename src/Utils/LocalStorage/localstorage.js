

const searchItem = () => {
    const appliedJob = localStorage.getItem('applicatopns');
    if (appliedJob) {
        return JSON.parse(appliedJob);
    } else {
        return [];
    }
}

const saveToLocatStorage = application => {
    const totalApplication = searchItem();
    const exist = totalApplication.find(appId => appId.id == application.id);

    if (!exist) {
        totalApplication.push(application);
        localStorage.setItem('applicatopns', JSON.stringify(totalApplication));
        alert('Applied successfull!!!')
    } else {
        alert("Already applied sir '_' ")
    }
}

export {searchItem, saveToLocatStorage}