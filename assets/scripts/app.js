// Dashboard Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    initializeThemeToggle();
    initializeSystemThemeListener();
    initializeTabNavigation();
    initializeTooltips();
    initializeInteractiveElements();
    initializeAnimations();
    initializeImageModal();
});

// Tab Navigation System
function initializeTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Trigger animations for the new section
                triggerSectionAnimations(targetContent);
                
                // Smooth scroll to top of content area
                targetContent.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
}

// Enhanced Tooltip System
function initializeTooltips() {
    const tooltipData = {
        'threshold-high': {
            title: 'Risiko Tinggi - Hip Vertical >50°',
            content: 'Bayattork et al. (2024) menunjukkan bahwa sudut ini menyebabkan ketidakstabilan postural yang signifikan dan gangguan keseimbangan.'
        },
        'threshold-forward': {
            title: 'Forward Lean Berlebihan - Hip Vertical <10°',
            content: 'Yavuz & Erdag (2017) mengidentifikasi peningkatan stress pada lumbar spine dan risiko cedera punggung bawah.'
        },
        'threshold-knee': {
            title: 'Knee Over Toes - Ankle Vertical >45°',
            content: 'Wallace et al. (2002) meneliti peningkatan stress pada patellofemoral joint, namun tidak selalu berbahaya jika ada mobilitas ankle yang baik.'
        },
        'threshold-deep': {
            title: 'Deep Squat - Knee Vertical >105°',
            content: 'Studi terkini menunjukkan bahwa deep squat umumnya aman untuk populasi sehat dengan mobilitas yang baik.'
        }
    };

    // Add tooltips to threshold items
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
    
    tooltipTriggers.forEach(trigger => {
        const tooltipKey = trigger.getAttribute('data-tooltip');
        const tooltipInfo = tooltipData[tooltipKey];
        
        if (tooltipInfo) {
            trigger.addEventListener('mouseenter', function(e) {
                showTooltip(e.target, tooltipInfo.title, tooltipInfo.content);
            });
            
            trigger.addEventListener('mouseleave', function() {
                hideTooltip();
            });

            // Add cursor pointer to indicate interactivity
            trigger.style.cursor = 'pointer';
        }
    });
}

// Interactive Elements
function initializeInteractiveElements() {
    // Enhanced hover effects for cards
    const interactiveCards = document.querySelectorAll('.stat-card, .result-stat-card, .analysis-card, .blackbox-card, .discussion-card');
    
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
            
            // Add subtle glow effect for certain cards
            if (this.classList.contains('analysis-card') || this.classList.contains('blackbox-card')) {
                this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });

    // Add table row hover effects
    const tableRows = document.querySelectorAll('.threshold-table tbody tr, .results-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'var(--color-secondary)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    // Add click feedback to interactive elements
    const clickableElements = document.querySelectorAll('.analysis-card, .blackbox-card, .discussion-card');
    clickableElements.forEach(element => {
        element.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
}

// Animation and Loading Effects
function initializeAnimations() {
    // Animate stat numbers on load
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat, index) => {
        setTimeout(() => {
            animateNumber(stat);
        }, index * 200);
    });

    // Animate progress bars with delay
    setTimeout(() => {
        const progressBars = document.querySelectorAll('.injury-fill, .type-fill');
        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                animateProgressBar(bar);
            }, index * 100);
        });
    }, 500);

    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe cards and sections
    const observableElements = document.querySelectorAll(
        '.stat-card, .result-stat-card, .chart-container, .analysis-card, .blackbox-card, .discussion-card, .threshold-table-container'
    );
    
    observableElements.forEach(element => {
        observer.observe(element);
    });
}

// Image Modal System
function initializeImageModal() {
    const clickableImages = document.querySelectorAll('.clickable-image');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.querySelector('.image-modal-caption');
    const closeBtn = document.querySelector('.image-modal-close');

    // Add click event to all clickable images
    clickableImages.forEach(image => {
        image.addEventListener('click', function() {
            const imageSrc = this.src;
            const imageAlt = this.alt;
            const imageCaption = this.getAttribute('data-caption') || imageAlt;
            
            // Set modal content
            modalImage.src = imageSrc;
            modalImage.alt = imageAlt;
            modalCaption.textContent = imageCaption;
            
            // Show modal
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close modal when clicking close button
    closeBtn.addEventListener('click', closeImageModal);

    // Close modal when clicking overlay
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target.classList.contains('image-modal-overlay')) {
            closeImageModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeImageModal();
        }
    });

    function closeImageModal() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Theme Toggle Functionality
function initializeThemeToggle() {
    const themeSwitch = document.getElementById('theme-switch');
    const themeText = document.querySelector('.theme-text');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    applyTheme(savedTheme);
    
    // Update toggle switch state
    themeSwitch.checked = savedTheme === 'dark';
    updateThemeText(savedTheme);
    
    // Add event listener for theme toggle
    themeSwitch.addEventListener('change', function() {
        const newTheme = this.checked ? 'dark' : 'light';
        
        // Add loading effect
        body.classList.add('theme-transitioning');
        
        // Apply theme with animation
        setTimeout(() => {
            applyTheme(newTheme);
            updateThemeText(newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Remove loading effect
            setTimeout(() => {
                body.classList.remove('theme-transitioning');
            }, 100);
        }, 50);
        
        // Add transition effect for smooth theme change
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-color-scheme', theme);
}

function updateThemeText(theme) {
    const themeText = document.querySelector('.theme-text');
    if (themeText) {
        themeText.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
}

// Detect system theme preference
function detectSystemTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    // If no saved preference, check system preference
    if (!savedTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    }
    
    return savedTheme;
}

// Listen for system theme changes
function initializeSystemThemeListener() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addListener(function(e) {
        // Only apply system theme if user hasn't manually set a preference
        const hasManualPreference = localStorage.getItem('theme');
        
        if (!hasManualPreference) {
            const systemTheme = e.matches ? 'dark' : 'light';
            applyTheme(systemTheme);
            
            const themeSwitch = document.getElementById('theme-switch');
            if (themeSwitch) {
                themeSwitch.checked = systemTheme === 'dark';
                updateThemeText(systemTheme);
            }
        }
    });
}

// Tooltip Functions
function showTooltip(element, title, content) {
    hideTooltip(); // Remove any existing tooltip
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip show';
    tooltip.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 8px; color: var(--color-primary);">
            ${title}
        </div>
        <div style="line-height: 1.4;">
            ${content}
        </div>
    `;
    
    document.body.appendChild(tooltip);
    
    // Position tooltip
    positionTooltip(tooltip, element);
}

function positionTooltip(tooltip, element) {
    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    
    // Calculate position
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
    let top = rect.top - tooltipRect.height - 12;
    
    // Adjust if tooltip goes off screen
    if (left < 10) {
        left = 10;
    } else if (left + tooltipRect.width > window.innerWidth - 10) {
        left = window.innerWidth - tooltipRect.width - 10;
    }
    
    if (top < 10) {
        top = rect.bottom + 12;
        tooltip.classList.add('tooltip-bottom');
    }
    
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
}

function hideTooltip() {
    const existingTooltip = document.querySelector('.tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }
}

// Animation Functions
function animateNumber(element) {
    const text = element.textContent;
    const hasPercent = text.includes('%');
    const hasDecimal = text.includes('.');
    const hasText = /[a-zA-Z]/.test(text) && !hasPercent;
    
    // Skip animation for text-only content
    if (hasText && !hasPercent) {
        return;
    }
    
    // Handle decimal percentages correctly
    let target;
    if (hasPercent) {
        // Extract value like 29.3 from "29.3%"
        target = parseFloat(text.replace('%', ''));
    } else if (hasDecimal) {
        // Handle decimal numbers like 10.54, 26.13
        target = parseFloat(text);
        element.classList.add('decimal');
    } else {
        // For non-percentage, non-decimal values
        target = parseInt(text.replace(/[^\d]/g, ''));
    }
    
    if (isNaN(target)) return;
    
    const duration = 2000;
    const start = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        if (hasPercent) {
            // Handle decimal values
            const currentNumber = (target * easeOutCubic(progress)).toFixed(1);
            element.textContent = currentNumber + '%';
        } else if (hasDecimal) {
            // Handle decimal numbers with 2 decimal places
            const currentNumber = (target * easeOutCubic(progress)).toFixed(2);
            element.textContent = currentNumber;
        } else {
            const currentNumber = Math.floor(target * easeOutCubic(progress));
            element.textContent = text.includes('-') ? 
                                currentNumber + '-' + text.split('-')[1] : 
                                currentNumber;
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            // Add final class for completed animation
            element.classList.remove('animating');
        }
    }
    
    // Add animating class
    element.classList.add('animating');
    requestAnimationFrame(updateNumber);
}

function animateProgressBar(bar) {
    const targetWidth = bar.style.width || '0%';
    bar.style.width = '0%';
    
    setTimeout(() => {
        bar.style.width = targetWidth;
        bar.style.transition = 'width 1s ease-out';
    }, 200);
}

function triggerSectionAnimations(section) {
    const animatableElements = section.querySelectorAll('.stat-card, .angle-card, .platform-card');
    
    animatableElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Responsive Navigation
function handleResponsiveNavigation() {
    const tabNavigation = document.querySelector('.tab-navigation');
    
    if (window.innerWidth <= 768) {
        tabNavigation.classList.add('mobile-nav');
        
        // Add mobile-specific interactions
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('touchstart', function() {
                this.style.backgroundColor = 'var(--color-secondary-hover)';
            });
            
            btn.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 150);
            });
        });
    } else {
        tabNavigation.classList.remove('mobile-nav');
    }
}

// Handle window resize
window.addEventListener('resize', debounce(handleResponsiveNavigation, 250));

// Initialize responsive behavior on load
handleResponsiveNavigation();

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading state management
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        const overview = document.getElementById('overview');
        if (overview && overview.classList.contains('active')) {
            triggerSectionAnimations(overview);
        }
    }, 500);
});

// Add additional CSS for loading and animations
const additionalStyles = `
    <style>
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
        
        .fade-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .mobile-nav {
            padding-bottom: var(--space-12);
            border-radius: var(--radius-base);
        }
        
        @media (max-width: 768px) {
            .tab-btn {
                min-width: 100px;
                text-align: center;
            }
        }
    </style>
`;

// Inject additional styles
document.head.insertAdjacentHTML('beforeend', additionalStyles);