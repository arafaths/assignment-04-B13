const totalJobs = document.getElementById('total');
const totalDisplay = document.getElementById('total-display');
const interviewDisplay = document.getElementById('interview-display');
const rejectetDisplay = document.getElementById('rejected-display');

const allCards = document.getElementById('all-cards');
let interviewList = [];
let rejectetList = [];

function calculateCound() { 
  totalDisplay.innerText = allCards.children.length;
  totalJobs.innerText = allCards.children.length;
  interviewDisplay.innerText = interviewList.length;
  rejectetDisplay.innerText = rejectetList.length;
};
calculateCound();

allCards.addEventListener('click', function (event) { 
  const card = event.target.closest('.bg-white');

  if (event.target.innerText === 'Interview') {
    const badge = card.querySelector('.badge');

    if (!interviewList.includes(card)) { 
      interviewList.push(card);
    };

    rejectetList = rejectetList.filter(item => item !== card);

    badge.innerText = 'Interview';
    badge.classList.remove('badge-neutral', 'badge-error');
    badge.classList.add('badge-success', 'shadow-md');

    calculateCound(); 
  }
  if (event.target.innerText === 'Rejected') {
    const badge = card.querySelector('.badge');

    if (!rejectetList.includes(card)) { 
      rejectetList.push(card);
    };

    interviewList = interviewList.filter(item => item !== card);

    badge.innerText = 'Rejected';
    badge.classList.remove('badge-neutral');
    badge.classList.add('badge-error', 'shadow-md');

    calculateCound(); 
  }
  if (event.target.closest('.btn-circle')) {
    interviewList = interviewList.filter(hello => hello !== card);
    rejectetList = rejectetList.filter(hello => hello !== card);
    card.remove();
    calculateCound();
  }
});


const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectetBtn = document.getElementById('rejectet-btn');


// button toggle style
function toggleStyle(id) { 
  // all class reset
  allBtn.classList.remove('btn-primary');
  interviewBtn.classList.remove('btn-primary');
  rejectetBtn.classList.remove('btn-primary');
  // selected class modify
  const selected = document.getElementById(id);
  selected.classList.add('btn-primary');

  const cards = document.getElementById('all-cards').children;
  for (const card of cards) { 
    const badgeText = card.querySelector('.badge').innerText;
    
    if (id === 'all-btn') { 
      card.style.display = 'flex';
    };
    if (id === 'interview-btn') { 
      card.style.display = badgeText === 'Interview' ? 'flex' : 'none';
    };
    if (id === 'rejectet-btn') { 
      card.style.display = badgeText === 'Rejected' ? 'flex' : 'none';
    };
  };
};

