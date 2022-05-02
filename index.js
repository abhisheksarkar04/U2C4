// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",ticksub)

function ticksub()
{
    event.preventDefault()
    var mplArr = JSON.parse(localStorage.getItem("schedule"))
    var mplObj = {
        matchNumer:document.querySelector("#matchNum").value,
        teamsA:document.querySelector("#teamA").value,
        teamsB:document.querySelector("#teamB").value,
        dates:document.querySelector("#date").value,
        venues:document.querySelector("#venue").value,
        schedules:document.querySelector("#schedule").value,
    };
    mplArr.push(mplObj);
    console.log(mplArr);
    localStorage.setItem("schedule", JSON.stringify(mplArr));


}
