// ==============================
// AGMS Dashboard
// ==============================

let members = JSON.parse(localStorage.getItem("members")) || [];

let totalMembers = document.getElementById("totalMembers");
let paidMembers = document.getElementById("paidMembers");
let unpaidMembers = document.getElementById("unpaidMembers");
let collection = document.getElementById("collection");
let recentTable = document.getElementById("recentTable");
let adminName = document.getElementById("adminName");

// Admin Name
if (adminName) {
    adminName.innerHTML = "Welcome, " + (localStorage.getItem("adminName") || "Admin");
}

let paid = 0;
let unpaid = 0;
let totalCollection = 0;

members.forEach(function (member) {

    if (member.status == "Paid") {

        paid++;
        totalCollection += Number(member.amount);

    } else {

        unpaid++;

    }

});

if (totalMembers)
    totalMembers.innerHTML = members.length;

if (paidMembers)
    paidMembers.innerHTML = paid;

if (unpaidMembers)
    unpaidMembers.innerHTML = unpaid;

if (collection)
    collection.innerHTML = "Rs. " + totalCollection;

// Recent Members Table

if (recentTable) {

    recentTable.innerHTML = `

<tr>

<th>ID</th>

<th>Name</th>

<th>Amount</th>

<th>Status</th>

</tr>

`;

    members.forEach(function (member, index) {

        let color = member.status == "Paid" ? "green" : "red";

        recentTable.innerHTML += `

<tr>

<td>AG${String(index + 1).padStart(3, '0')}</td>

<td>${member.name}</td>

<td>Rs. ${member.amount}</td>

<td style="color:${color};font-weight:bold;">
${member.status}
</td>

</tr>

`;

    });

}
let paymentTable = document.getElementById("paymentHistory");

let paidCount = 0;
let unpaidCount = 0;

members.forEach(function (member) {

    if (member.status == "Paid") {

        paidCount++;

    } else {

        unpaidCount++;

    }

});

document.getElementById("paidStatus").innerHTML = paidCount;
document.getElementById("pendingStatus").innerHTML = unpaidCount;

if (paymentTable) {

    paymentTable.innerHTML = `

<tr>

<th>Member</th>

<th>Fee</th>

<th>Status</th>

</tr>

`;

    members.forEach(function (member) {

        let text = "";

        let color = "";

        if (member.status == "Paid") {

            text = "✅ MANAM DY ANDIWALA";

            color = "lime";

        } else {

            text = "❌ PAISA SEND KARNA";

            color = "red";

        }

        paymentTable.innerHTML += `

<tr>

<td>${member.name}</td>

<td>Rs. ${member.amount}</td>

<td style="color:${color};font-weight:bold;">
${text}
</td>

</tr>

`;

    });

}