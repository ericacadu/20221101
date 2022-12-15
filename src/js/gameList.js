import data from "./data.json";

const $ = (e) => document.querySelector(e);

function updateList(data) {
  data
    .sort((a, b) => a.id - b.id)
    .forEach(
      ({ area, name, time, content, awards, claim, notice, img, url }) => {
        $(".gameList").innerHTML += `
    <section>
          <div class="list-board">
            <div class="list-deco"></div>
            <div class="list-logo">
              <img src="./images/logo/${img}" alt="" />
              <a href="${url}" target="_blank"></a>
            </div>
            <table>
              <tr>
                <th>地區</th>
                <td>${area}</td>
              </tr>
              <tr>
                <th>遊戲名稱</th>
                <td>${name}</td>
              </tr>
              <tr>
                <th>活動時間</th>
                <td>${time}</td>
              </tr>
              <tr>
                <th>活動內容</th>
                <td>${content}</td>
              </tr>
              <tr>
                <th>贈獎方式</th>
                <td>${awards}</td>
              </tr>
              <tr>
                <th>兌換期限</th>
                <td>${claim}</td>
              </tr>
              <tr>
                <th>注意事項</th>
                <td>${notice}</td>
              </tr>
            </table>
            <div class="list-deco"></div>
          </div>
        </section>`;
      }
    );
}

function searchKeyword() {
  const keyword = $("#searchInput").value.trim().toLowerCase();
  const result = data.filter(({ name }) =>
    name.trim().toLowerCase().match(keyword)
  );

  $(".gameList").innerHTML = "";
  updateList(result);
}

updateList(data);
$("#searchInput").addEventListener("keyup", searchKeyword);
$("#searchInput").addEventListener("change", searchKeyword);
