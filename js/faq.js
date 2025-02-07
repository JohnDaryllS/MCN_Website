const faqQuestions = document.querySelectorAll('.faq-question');
    
        faqQuestions.forEach(question => {
          question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
    
            // Check if the clicked answer is already visible
            if (!answer.classList.contains('show')) {
              // Close all other answers and reset icons
              document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('show'));
              document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('open'));
            }
    
            // Toggle the clicked question's answer
            answer.classList.toggle('show');
            question.classList.toggle('open');
          });
        });