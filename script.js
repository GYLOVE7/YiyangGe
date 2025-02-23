document.addEventListener("DOMContentLoaded", function () {
    const username = "your-username";  // 你的 GitHub 用户名
    const repoCountElement = document.getElementById("repo-count");
    const followersCountElement = document.getElementById("followers-count");

    // 调用 GitHub API 获取仓库和粉丝数
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            repoCountElement.textContent = data.public_repos;
            followersCountElement.textContent = data.followers;
        })
        .catch(error => {
            console.error("获取 GitHub 数据失败：", error);
            repoCountElement.textContent = "无法加载";
            followersCountElement.textContent = "无法加载";
        });
});