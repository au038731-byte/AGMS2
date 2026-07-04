// ===============================
// AGMS v3.0 Members System
// ===============================

let members = JSON.parse(localStorage.getItem("members")) || [];

const table = document.getElementById("memberTable");

function loadMembers() {

    if (!table) return;

    table.innerHTML = `

    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Action</th>
    </tr>

    `;

    members.forEach((member, index) => {

        let color = member.status === "Paid" ? "green" : "red";

        table.innerHTML += `

        <tr>

            <td>AG${String(index + 1).padStart(3, '0')}</td>

            <td>${member.name}</td>

            <td>Rs. ${member.amount}</td>

            <td style="color:${color};font-weight:bold;">
                ${member.status}
            </td>

            <td>

                <button onclick="viewMember(${index})">
                    👁 View
                </button>

                <button onclick="editMember(${index})">
                    ✏ Edit
                </button>

                <button onclick="deleteMember(${index})">
                    🗑 Delete
                </button>

            </td>

        </tr>

        `;

    });

}

function viewMember(index) {

    localStorage.setItem("selectedMember", index);

    window.location.href = "profile.html";

}

function editMember(index) {

    let newName = prompt("Enter New Name", members[index].name);

    if (newName) {

        members[index].name = newName;

        localStorage.setItem("members", JSON.stringify(members));

        loadMembers();

    }

}

function deleteMember(index) {

    if (confirm("Delete this member?")) {

        members.splice(index, 1);

        localStorage.setItem("members", JSON.stringify(members));

        loadMembers();

    }

}

function searchMember() {

    let input = document
        .getElementById("search")
        .value
        .toLowerCase();

    let rows = document.querySelectorAll("#memberTable tr");

    for (let i = 1; i < rows.length; i++) {

        let name = rows[i]
            .cells[1]
            .innerText
            .toLowerCase();

        rows[i].style.display =
            name.includes(input) ? "" : "none";

    }

}

loadMembers();