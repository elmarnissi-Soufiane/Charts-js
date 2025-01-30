function togglePack(packClass) {
    let rows = document.querySelectorAll(`.${packClass}`);
    rows.forEach(row => {
        row.style.display = row.style.display === "none" || row.style.display === "" ? "table-row" : "none";
    });
}
// function togglePack(packId) {
//     var packDetails = document.querySelectorAll('.' + packId);
//     packDetails.forEach(function (detail) {
//         if (detail.style.display === 'none') {
//             detail.style.display = 'table-row';  // Show the details
//         } else {
//             detail.style.display = 'none';  // Hide the details
//         }
//     });
// }

