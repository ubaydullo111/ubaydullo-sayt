let activeCourseId = null;

// Tablar bo'ylab o'tish
function switchTab(element, tabId) {
    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    element.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// Dars modalini ochish
function openCourse(title, id) {
    activeCourseId = id;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('courseModal').style.display = 'flex';
}

// Modalni yopish
function closeModal() {
    document.getElementById('courseModal').style.display = 'none';
}

// Darsni tugatish va progressni oshirish
function completeLesson() {
    if (!activeCourseId) return;

    const textElem = document.getElementById(`prog-text-${activeCourseId}`);
    const barElem = document.getElementById(`prog-bar-${activeCourseId}`);

    let currentProgress = parseInt(textElem.innerText);
    if (currentProgress < 100) {
        currentProgress += 10;
        if (currentProgress > 100) currentProgress = 100;

        textElem.innerText = currentProgress + '%';
        barElem.style.width = currentProgress + '%';
    }

    closeModal();
}