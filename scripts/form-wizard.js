var currentStep = 1;
        var stepPercentage = 100 / (numSteps-1);
        var stepContainers = $('[id^=step-]');
        var numSteps = stepContainers.length;
        var btnPrevious = $('#btn_previous');
        var btnNext = $('#btn_next');
        var btnCreate = $('#btn_create');
        var btnCanel = $('#btn_cancel');
        var stepButtons = $('[data-role="goto"]');

        var init = function(){
        // hide all steps
        stepContainers.hide();
        
        // add click events to buttons
        btnPrevious.click(handlePrevious);
        btnNext.click(handleNext);

         // add click event to the explicit step buttons
        stepButtons.click(function(){
            var stepNumber = $(this).data('step');
            
            if((this.classList.contains("completed")) || (this.classList.contains("active")) ){
                handleStep(stepNumber);
            }
            
        });
        
        // show step 1
        handleStep(1);
        };

        var handleStep = function(stepNumber){
        var stepIndex = stepNumber-1; 
        var stepContainer = $(stepContainers[stepIndex]);
        
        // hide all steps
        stepContainers.hide();
        btnCreate.hide();
        stepButtons.removeClass('active');
        
        
        // show/hide previous and next buttons
        if(stepNumber >= numSteps){
            btnNext.hide();
            btnCreate.show();
        } else {
            btnNext.show();
        }
        if(stepNumber <= 1) {
            btnPrevious.hide();
        } else {
            btnPrevious.show();
        }
        
        // show current step
        stepContainer.show();
        
        // activate current step button
        $(stepButtons[stepIndex]).addClass('active');
        $(stepButtons[stepIndex-1]).addClass('completed');

        // store current step
        currentStep = stepNumber;
        };

        var handleNext = function(){
        var nextStep = currentStep + 1;
        if (nextStep >= numSteps) nextStep = numSteps;
        
        handleStep(nextStep);
        }

        var handlePrevious = function(){
        var nextStep = currentStep - 1;
        if (nextStep <= 1) nextStep = 1;
        
        handleStep(nextStep);
        }

        init();