// Write a function createAnalyticsTracker that tracks user actions (e.g., button clicks, page views) on a website and returns the count of each activity.



function createAnalyticsTracker() {
 //Your code here
}

// Usage
const tracker = createAnalyticsTracker();
tracker.track('page_view');
tracker.track('button_click');
tracker.track('page_view');
console.log(tracker.getAnalytics()); // { page_view: 2, button_click: 1 }


  