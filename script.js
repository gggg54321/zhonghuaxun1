// 动态加载更多内容
document.addEventListener('DOMContentLoaded', function () {
    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = '加载更多信息';
    loadMoreButton.style.margin = '20px 0';
    loadMoreButton.style.padding = '10px 20px';
    loadMoreButton.style.backgroundColor = '#4CAF50';
    loadMoreButton.style.color = 'white';
    loadMoreButton.style.border = 'none';
    loadMoreButton.style.cursor = 'pointer';

    const introductionSection = document.getElementById('introduction');
    introductionSection.appendChild(loadMoreButton);

    loadMoreButton.addEventListener('click', function () {
        const additionalInfo = document.createElement('p');
        additionalInfo.textContent = '中华鲟寿命较长，一般能活到40岁左右。它们生长缓慢，性成熟较晚，雌性中华鲟要到14 - 26岁才性成熟，雄性稍早，在9 - 18岁达到性成熟。这使得它们的种群数量在受到外界干扰后，恢复起来较为困难。';
        introductionSection.appendChild(additionalInfo);
        loadMoreButton.style.display = 'none'; // 隐藏按钮
    });

    // 显示/隐藏部分信息
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '显示/隐藏饮食信息';
    toggleButton.style.margin = '20px 0';
    toggleButton.style.padding = '10px 20px';
    toggleButton.style.backgroundColor = '#4CAF50';
    toggleButton.style.color = 'white';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';

    const dietSection = document.getElementById('diet');
    dietSection.insertBefore(toggleButton, dietSection.firstChild);

    toggleButton.addEventListener('click', function () {
        const dietContent = dietSection.querySelectorAll('p, img');
        dietContent.forEach(content => {
            if (content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });

    // 用户交互：提交看法
    const form = document.createElement('form');
    form.style.margin = '20px 0';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = '请输入你对中华鲟的看法';
    input.style.padding = '10px';
    input.style.width = '300px';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = '提交';
    submitButton.style.padding = '10px 20px';
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.cursor = 'pointer';

    form.appendChild(input);
    form.appendChild(submitButton);

    const conservationSection = document.getElementById('conservation');
    conservationSection.appendChild(form);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const userInput = input.value;
        if (userInput) {
            const userComment = document.createElement('p');
            userComment.textContent = `用户看法：${userInput}`;
            conservationSection.appendChild(userComment);
            input.value = ''; // 清空输入框
        }
    });
});