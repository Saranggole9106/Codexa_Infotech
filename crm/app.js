/**
 * CRM Platform — Mock Data & Application Logic
 */

// ==========================================
// MOCK DATA
// ==========================================

const CUSTOMERS = [
    { id: 1, name: 'Amit Sharma', email: 'amit@techcorp.in', phone: '+91 98765 43210', company: 'TechCorp India', status: 'Active', revenue: 450000, avatar: 'AS', color: '#6366f1' },
    { id: 2, name: 'Priya Deshmukh', email: 'priya@designstudio.com', phone: '+91 87654 32109', company: 'Design Studio', status: 'Active', revenue: 320000, avatar: 'PD', color: '#8b5cf6' },
    { id: 3, name: 'Rahul Patil', email: 'rahul@buildmart.in', phone: '+91 76543 21098', company: 'BuildMart', status: 'Active', revenue: 580000, avatar: 'RP', color: '#3b82f6' },
    { id: 4, name: 'Sneha Kulkarni', email: 'sneha@foodchain.co', phone: '+91 65432 10987', company: 'FoodChain Co.', status: 'Inactive', revenue: 150000, avatar: 'SK', color: '#22c55e' },
    { id: 5, name: 'Vikram Joshi', email: 'vikram@autoworld.in', phone: '+91 54321 09876', company: 'AutoWorld', status: 'Active', revenue: 720000, avatar: 'VJ', color: '#f59e0b' },
    { id: 6, name: 'Anjali Mehta', email: 'anjali@fashionhub.com', phone: '+91 43210 98765', company: 'FashionHub', status: 'Active', revenue: 290000, avatar: 'AM', color: '#ef4444' },
    { id: 7, name: 'Rohan Gupta', email: 'rohan@finserve.in', phone: '+91 32109 87654', company: 'FinServe', status: 'Active', revenue: 890000, avatar: 'RG', color: '#6366f1' },
    { id: 8, name: 'Megha Iyer', email: 'megha@healthplus.co', phone: '+91 21098 76543', company: 'HealthPlus', status: 'Inactive', revenue: 180000, avatar: 'MI', color: '#8b5cf6' },
    { id: 9, name: 'Arjun Nair', email: 'arjun@logisync.in', phone: '+91 10987 65432', company: 'LogiSync', status: 'Active', revenue: 410000, avatar: 'AN', color: '#3b82f6' },
    { id: 10, name: 'Pooja Reddy', email: 'pooja@edulearn.com', phone: '+91 98712 34567', company: 'EduLearn', status: 'Active', revenue: 350000, avatar: 'PR', color: '#22c55e' },
];

const LEADS = [
    { id: 1, name: 'Suresh Kumar', company: 'RetailMax', value: 250000, stage: 'New', date: '2026-02-20' },
    { id: 2, name: 'Deepa Rao', company: 'CloudNine Tech', value: 480000, stage: 'Contacted', date: '2026-02-18' },
    { id: 3, name: 'Kiran Shah', company: 'GreenEnergy', value: 620000, stage: 'Proposal', date: '2026-02-15' },
    { id: 4, name: 'Nisha Patel', company: 'MediaWorks', value: 350000, stage: 'New', date: '2026-02-22' },
    { id: 5, name: 'Manoj Verma', company: 'SmartHome Inc', value: 780000, stage: 'Negotiation', date: '2026-02-10' },
    { id: 6, name: 'Swati Dubey', company: 'Pharma Plus', value: 190000, stage: 'Contacted', date: '2026-02-19' },
    { id: 7, name: 'Aakash Pillai', company: 'TravelGo', value: 310000, stage: 'Proposal', date: '2026-02-14' },
    { id: 8, name: 'Renu Agarwal', company: 'SpaceCraft', value: 550000, stage: 'Negotiation', date: '2026-02-12' },
    { id: 9, name: 'Gaurav Mishra', company: 'DataSync', value: 420000, stage: 'New', date: '2026-02-24' },
    { id: 10, name: 'Kavita Singh', company: 'AgroFresh', value: 680000, stage: 'Contacted', date: '2026-02-17' },
];

const TASKS = [
    { id: 1, title: 'Follow up with TechCorp on project proposal', assignee: 'Sarang G.', dueDate: '2026-02-26', priority: 'high', status: 'Pending' },
    { id: 2, title: 'Send invoice to BuildMart for Q4 services', assignee: 'Sarang G.', dueDate: '2026-02-27', priority: 'medium', status: 'Pending' },
    { id: 3, title: 'Schedule demo for CloudNine Tech team', assignee: 'Amit S.', dueDate: '2026-02-25', priority: 'high', status: 'In Progress' },
    { id: 4, title: 'Prepare quarterly sales report', assignee: 'Priya D.', dueDate: '2026-02-28', priority: 'medium', status: 'Pending' },
    { id: 5, title: 'Update CRM contact database records', assignee: 'Sarang G.', dueDate: '2026-02-24', priority: 'low', status: 'Completed' },
    { id: 6, title: 'Review contract terms with FinServe', assignee: 'Sarang G.', dueDate: '2026-03-01', priority: 'high', status: 'Pending' },
    { id: 7, title: 'Design marketing email for new service launch', assignee: 'Anjali M.', dueDate: '2026-03-02', priority: 'medium', status: 'In Progress' },
    { id: 8, title: 'Client onboarding call with GreenEnergy', assignee: 'Sarang G.', dueDate: '2026-02-28', priority: 'high', status: 'Pending' },
];

const ACTIVITIES = [
    { text: 'New lead <b>Gaurav Mishra</b> added from DataSync', time: '2 hours ago', color: 'blue' },
    { text: 'Invoice sent to <b>BuildMart</b> – ₹5,80,000', time: '4 hours ago', color: 'green' },
    { text: 'Meeting scheduled with <b>CloudNine Tech</b>', time: '6 hours ago', color: 'purple' },
    { text: 'Deal closed with <b>AutoWorld</b> – ₹7,20,000', time: 'Yesterday', color: 'green' },
    { text: 'Follow-up reminder for <b>FinServe</b>', time: 'Yesterday', color: 'orange' },
    { text: 'New customer <b>Pooja Reddy</b> registered', time: '2 days ago', color: 'blue' },
];

const REVENUE_DATA = {
    labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    values: [320000, 480000, 410000, 590000, 530000, 680000],
};

const SALES_DATA = {
    labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    values: [8, 12, 10, 15, 13, 18],
};

const LEAD_SOURCES = [
    { name: 'Website', value: 35, color: '#6366f1' },
    { name: 'Referral', value: 28, color: '#3b82f6' },
    { name: 'Social Media', value: 20, color: '#8b5cf6' },
    { name: 'Cold Outreach', value: 12, color: '#f59e0b' },
    { name: 'Events', value: 5, color: '#22c55e' },
];

// ==========================================
// APP STATE
// ==========================================
let customers = [...CUSTOMERS];
let leads = [...LEADS];
let tasks = [...TASKS];
let currentView = 'dashboard';

// ==========================================
// LOGIN
// ==========================================
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPassword').value;
    if (email === 'admin@codexa.com' && pass === 'admin123') {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('app').style.display = 'flex';
        initApp();
    } else {
        showToast('Invalid credentials. Use demo login.', 'error');
    }
});

document.getElementById('logoutBtn').addEventListener('click', () => {
    document.getElementById('app').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'flex';
});

// ==========================================
// NAVIGATION
// ==========================================
const viewTitles = {
    dashboard: ['Dashboard', 'Welcome back, Sarang'],
    customers: ['Customers', 'Manage your customer database'],
    leads: ['Leads Pipeline', 'Track your sales pipeline'],
    tasks: ['Tasks', 'Manage your activities'],
    analytics: ['Analytics', 'Business performance insights'],
};

document.querySelectorAll('.nav-item[data-view]').forEach(item => {
    item.addEventListener('click', () => {
        switchView(item.dataset.view);
        // Close mobile sidebar
        document.getElementById('sidebar').classList.remove('open');
    });
});

function switchView(view) {
    currentView = view;
    // Update nav
    document.querySelectorAll('.nav-item[data-view]').forEach(n => n.classList.remove('active'));
    document.querySelector(`.nav-item[data-view="${view}"]`).classList.add('active');
    // Update views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${view}`).classList.add('active');
    // Update title
    document.getElementById('viewTitle').textContent = viewTitles[view][0];
    document.getElementById('viewSubtitle').textContent = viewTitles[view][1];

    if (view === 'analytics') renderAnalytics();
}

// Mobile menu
document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
});

// ==========================================
// INIT APP
// ==========================================
function initApp() {
    renderDashboard();
    renderCustomers();
    renderLeads();
    renderTasks();
}

// ==========================================
// DASHBOARD
// ==========================================
function renderDashboard() {
    // Metrics
    const activeCustomers = customers.filter(c => c.status === 'Active').length;
    const activeLeads = leads.length;
    const totalRevenue = customers.reduce((s, c) => s + c.revenue, 0);
    const pendingTasks = tasks.filter(t => t.status !== 'Completed').length;

    animateCounter('metricCustomers', activeCustomers);
    animateCounter('metricLeads', activeLeads);
    document.getElementById('metricRevenue').textContent = '₹' + formatNumber(totalRevenue);
    animateCounter('metricTasks', pendingTasks);

    // Activity
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = ACTIVITIES.map(a => `
        <div class="activity-item">
            <div class="activity-dot ${a.color}"></div>
            <div>
                <div class="activity-text">${a.text}</div>
                <div class="activity-time">${a.time}</div>
            </div>
        </div>
    `).join('');

    // Pipeline summary
    const stages = ['New', 'Contacted', 'Proposal', 'Negotiation'];
    const colors = ['#3b82f6', '#8b5cf6', '#f59e0b', '#22c55e'];
    const pipelineSummary = document.getElementById('pipelineSummary');
    pipelineSummary.innerHTML = stages.map((stage, i) => {
        const stageLeads = leads.filter(l => l.stage === stage);
        const totalVal = stageLeads.reduce((s, l) => s + l.value, 0);
        return `
            <div class="pipeline-stage">
                <div class="pipeline-stage-left">
                    <div class="pipeline-dot" style="background:${colors[i]}"></div>
                    <span class="pipeline-stage-name">${stage}</span>
                </div>
                <span class="pipeline-stage-count">${stageLeads.length}</span>
                <span class="pipeline-stage-value">₹${formatNumber(totalVal)}</span>
            </div>
        `;
    }).join('');

    // Top customers
    const topCustomers = [...customers].sort((a, b) => b.revenue - a.revenue).slice(0, 5);
    document.getElementById('topCustomersList').innerHTML = topCustomers.map(c => `
        <div class="top-customer">
            <div class="customer-avatar" style="background:${c.color}">${c.avatar}</div>
            <div class="top-customer-info">
                <div class="top-customer-name">${c.name}</div>
                <div class="top-customer-company">${c.company}</div>
            </div>
            <div class="top-customer-revenue">₹${formatNumber(c.revenue)}</div>
        </div>
    `).join('');

    // Revenue chart
    drawBarChart('revenueChart', REVENUE_DATA.labels, REVENUE_DATA.values, '#6366f1');
}

// ==========================================
// CUSTOMERS
// ==========================================
function renderCustomers(filter = 'all', search = '') {
    let filtered = customers;
    if (filter !== 'all') filtered = filtered.filter(c => c.status === filter);
    if (search) {
        const q = search.toLowerCase();
        filtered = filtered.filter(c =>
            c.name.toLowerCase().includes(q) ||
            c.email.toLowerCase().includes(q) ||
            c.company.toLowerCase().includes(q)
        );
    }

    document.getElementById('customersBody').innerHTML = filtered.map(c => `
        <tr>
            <td>
                <div class="customer-cell">
                    <div class="customer-avatar" style="background:${c.color}">${c.avatar}</div>
                    <span>${c.name}</span>
                </div>
            </td>
            <td>${c.email}</td>
            <td>${c.phone}</td>
            <td>${c.company}</td>
            <td><span class="status-badge ${c.status.toLowerCase()}">${c.status}</span></td>
            <td>₹${formatNumber(c.revenue)}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn" onclick="editCustomer(${c.id})" title="Edit"><i class='bx bx-edit'></i></button>
                    <button class="action-btn delete" onclick="deleteCustomer(${c.id})" title="Delete"><i class='bx bx-trash'></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

document.getElementById('customerSearch').addEventListener('input', (e) => {
    renderCustomers(document.getElementById('customerFilter').value, e.target.value);
});

document.getElementById('customerFilter').addEventListener('change', (e) => {
    renderCustomers(e.target.value, document.getElementById('customerSearch').value);
});

document.getElementById('addCustomerBtn').addEventListener('click', () => {
    openModal('Add Customer', getCustomerForm());
});

window.editCustomer = function (id) {
    const c = customers.find(x => x.id === id);
    if (!c) return;
    openModal('Edit Customer', getCustomerForm(c), id);
};

window.deleteCustomer = function (id) {
    customers = customers.filter(c => c.id !== id);
    renderCustomers();
    renderDashboard();
    showToast('Customer deleted successfully', 'success');
};

function getCustomerForm(c = null) {
    return `
        <div class="form-group">
            <label>Full Name</label>
            <input type="text" id="formName" value="${c ? c.name : ''}" placeholder="Enter name" required />
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" id="formEmail" value="${c ? c.email : ''}" placeholder="Enter email" required />
        </div>
        <div class="form-group">
            <label>Phone</label>
            <input type="text" id="formPhone" value="${c ? c.phone : ''}" placeholder="Enter phone" />
        </div>
        <div class="form-group">
            <label>Company</label>
            <input type="text" id="formCompany" value="${c ? c.company : ''}" placeholder="Enter company" />
        </div>
        <div class="form-group">
            <label>Status</label>
            <select id="formStatus">
                <option value="Active" ${c && c.status === 'Active' ? 'selected' : ''}>Active</option>
                <option value="Inactive" ${c && c.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
            </select>
        </div>
        <div class="form-group">
            <label>Revenue (₹)</label>
            <input type="number" id="formRevenue" value="${c ? c.revenue : ''}" placeholder="Enter revenue" />
        </div>
        <div class="modal-actions">
            <button class="btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn-primary" onclick="saveCustomer(${c ? c.id : 'null'})">${c ? 'Update' : 'Add'} Customer</button>
        </div>
    `;
}

window.saveCustomer = function (id) {
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const phone = document.getElementById('formPhone').value.trim();
    const company = document.getElementById('formCompany').value.trim();
    const status = document.getElementById('formStatus').value;
    const revenue = parseInt(document.getElementById('formRevenue').value) || 0;

    if (!name || !email) {
        showToast('Name and email are required', 'error');
        return;
    }

    const avatar = name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    const colors = ['#6366f1', '#8b5cf6', '#3b82f6', '#22c55e', '#f59e0b', '#ef4444'];

    if (id) {
        const idx = customers.findIndex(c => c.id === id);
        if (idx !== -1) {
            customers[idx] = { ...customers[idx], name, email, phone, company, status, revenue, avatar };
            showToast('Customer updated successfully', 'success');
        }
    } else {
        const newId = Math.max(...customers.map(c => c.id)) + 1;
        customers.push({ id: newId, name, email, phone, company, status, revenue, avatar, color: colors[Math.floor(Math.random() * colors.length)] });
        showToast('Customer added successfully', 'success');
    }

    closeModal();
    renderCustomers();
    renderDashboard();
};

// ==========================================
// LEADS PIPELINE
// ==========================================
function renderLeads(search = '') {
    const stages = [
        { name: 'New', color: '#3b82f6' },
        { name: 'Contacted', color: '#8b5cf6' },
        { name: 'Proposal', color: '#f59e0b' },
        { name: 'Negotiation', color: '#22c55e' },
    ];

    let filtered = leads;
    if (search) {
        const q = search.toLowerCase();
        filtered = filtered.filter(l =>
            l.name.toLowerCase().includes(q) ||
            l.company.toLowerCase().includes(q)
        );
    }

    document.getElementById('pipelineBoard').innerHTML = stages.map(stage => {
        const stageLeads = filtered.filter(l => l.stage === stage.name);
        return `
            <div class="pipeline-column">
                <div class="pipeline-col-header" style="border-color:${stage.color}">
                    <span class="pipeline-col-title">
                        ${stage.name}
                    </span>
                    <span class="pipeline-col-count">${stageLeads.length}</span>
                </div>
                <div class="pipeline-cards">
                    ${stageLeads.map(l => `
                        <div class="lead-card" onclick="editLead(${l.id})">
                            <div class="lead-card-title">${l.name}</div>
                            <div class="lead-card-company">${l.company}</div>
                            <div class="lead-card-footer">
                                <span class="lead-card-value">₹${formatNumber(l.value)}</span>
                                <span class="lead-card-date">${formatDate(l.date)}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

document.getElementById('leadSearch').addEventListener('input', (e) => {
    renderLeads(e.target.value);
});

document.getElementById('addLeadBtn').addEventListener('click', () => {
    openModal('Add Lead', getLeadForm());
});

window.editLead = function (id) {
    const l = leads.find(x => x.id === id);
    if (!l) return;
    openModal('Edit Lead', getLeadForm(l), id);
};

function getLeadForm(l = null) {
    const stages = ['New', 'Contacted', 'Proposal', 'Negotiation'];
    return `
        <div class="form-group">
            <label>Contact Name</label>
            <input type="text" id="formLeadName" value="${l ? l.name : ''}" placeholder="Enter name" required />
        </div>
        <div class="form-group">
            <label>Company</label>
            <input type="text" id="formLeadCompany" value="${l ? l.company : ''}" placeholder="Enter company" />
        </div>
        <div class="form-group">
            <label>Deal Value (₹)</label>
            <input type="number" id="formLeadValue" value="${l ? l.value : ''}" placeholder="Enter value" />
        </div>
        <div class="form-group">
            <label>Stage</label>
            <select id="formLeadStage">
                ${stages.map(s => `<option value="${s}" ${l && l.stage === s ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
        </div>
        <div class="modal-actions">
            <button class="btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn-primary" onclick="saveLead(${l ? l.id : 'null'})">${l ? 'Update' : 'Add'} Lead</button>
        </div>
    `;
}

window.saveLead = function (id) {
    const name = document.getElementById('formLeadName').value.trim();
    const company = document.getElementById('formLeadCompany').value.trim();
    const value = parseInt(document.getElementById('formLeadValue').value) || 0;
    const stage = document.getElementById('formLeadStage').value;

    if (!name) {
        showToast('Name is required', 'error');
        return;
    }

    if (id) {
        const idx = leads.findIndex(l => l.id === id);
        if (idx !== -1) {
            leads[idx] = { ...leads[idx], name, company, value, stage };
            showToast('Lead updated successfully', 'success');
        }
    } else {
        const newId = Math.max(...leads.map(l => l.id)) + 1;
        leads.push({ id: newId, name, company, value, stage, date: new Date().toISOString().split('T')[0] });
        showToast('Lead added successfully', 'success');
    }

    closeModal();
    renderLeads();
    renderDashboard();
};

// ==========================================
// TASKS
// ==========================================
function renderTasks(filter = 'all') {
    let filtered = tasks;
    if (filter !== 'all') filtered = filtered.filter(t => t.status === filter);

    // Sort: pending first, completed last
    filtered.sort((a, b) => {
        if (a.status === 'Completed' && b.status !== 'Completed') return 1;
        if (a.status !== 'Completed' && b.status === 'Completed') return -1;
        return 0;
    });

    document.getElementById('tasksList').innerHTML = filtered.map(t => `
        <div class="task-item ${t.status === 'Completed' ? 'completed' : ''}">
            <div class="task-check ${t.status === 'Completed' ? 'checked' : ''}" onclick="toggleTask(${t.id})">✓</div>
            <div class="task-info">
                <div class="task-title">${t.title}</div>
                <div class="task-meta">
                    <span><i class='bx bx-user'></i> ${t.assignee}</span>
                    <span><i class='bx bx-calendar'></i> ${formatDate(t.dueDate)}</span>
                </div>
            </div>
            <span class="task-priority ${t.priority}">${t.priority}</span>
        </div>
    `).join('');
}

document.getElementById('taskFilter').addEventListener('change', (e) => {
    renderTasks(e.target.value);
});

document.getElementById('addTaskBtn').addEventListener('click', () => {
    openModal('Add Task', getTaskForm());
});

window.toggleTask = function (id) {
    const t = tasks.find(x => x.id === id);
    if (!t) return;
    t.status = t.status === 'Completed' ? 'Pending' : 'Completed';
    renderTasks(document.getElementById('taskFilter').value);
    renderDashboard();
};

function getTaskForm(t = null) {
    return `
        <div class="form-group">
            <label>Task Title</label>
            <input type="text" id="formTaskTitle" value="${t ? t.title : ''}" placeholder="Enter task" required />
        </div>
        <div class="form-group">
            <label>Assignee</label>
            <input type="text" id="formTaskAssignee" value="${t ? t.assignee : 'Sarang G.'}" placeholder="Assignee" />
        </div>
        <div class="form-group">
            <label>Due Date</label>
            <input type="date" id="formTaskDate" value="${t ? t.dueDate : ''}" />
        </div>
        <div class="form-group">
            <label>Priority</label>
            <select id="formTaskPriority">
                <option value="high" ${t && t.priority === 'high' ? 'selected' : ''}>High</option>
                <option value="medium" ${t && t.priority === 'medium' ? 'selected' : ''}>Medium</option>
                <option value="low" ${t && t.priority === 'low' ? 'selected' : ''}>Low</option>
            </select>
        </div>
        <div class="modal-actions">
            <button class="btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn-primary" onclick="saveTask()">${t ? 'Update' : 'Add'} Task</button>
        </div>
    `;
}

window.saveTask = function () {
    const title = document.getElementById('formTaskTitle').value.trim();
    const assignee = document.getElementById('formTaskAssignee').value.trim();
    const dueDate = document.getElementById('formTaskDate').value;
    const priority = document.getElementById('formTaskPriority').value;

    if (!title) {
        showToast('Task title is required', 'error');
        return;
    }

    const newId = Math.max(...tasks.map(t => t.id)) + 1;
    tasks.push({ id: newId, title, assignee, dueDate, priority, status: 'Pending' });
    showToast('Task added successfully', 'success');
    closeModal();
    renderTasks();
    renderDashboard();
};

// ==========================================
// ANALYTICS
// ==========================================
function renderAnalytics() {
    // Sales chart
    setTimeout(() => {
        drawBarChart('salesChart', SALES_DATA.labels, SALES_DATA.values, '#8b5cf6');
    }, 100);

    // Lead sources
    const maxVal = Math.max(...LEAD_SOURCES.map(s => s.value));
    document.getElementById('sourceBars').innerHTML = LEAD_SOURCES.map(s => `
        <div class="source-bar-item">
            <div class="source-bar-label">
                <span>${s.name}</span>
                <span>${s.value}%</span>
            </div>
            <div class="source-bar-bg">
                <div class="source-bar-fill" style="width:${(s.value / maxVal) * 100}%;background:${s.color}"></div>
            </div>
        </div>
    `).join('');

    // Performance stats
    const totalRev = customers.reduce((s, c) => s + c.revenue, 0);
    const avgDeal = Math.round(totalRev / customers.length);
    const convRate = Math.round((customers.length / (customers.length + leads.length)) * 100);
    document.getElementById('perfStats').innerHTML = `
        <div class="perf-stat">
            <span class="perf-stat-label">Total Revenue</span>
            <span class="perf-stat-value">₹${formatNumber(totalRev)}</span>
        </div>
        <div class="perf-stat">
            <span class="perf-stat-label">Avg Deal Size</span>
            <span class="perf-stat-value">₹${formatNumber(avgDeal)}</span>
        </div>
        <div class="perf-stat">
            <span class="perf-stat-label">Conversion Rate</span>
            <span class="perf-stat-value">${convRate}%</span>
        </div>
        <div class="perf-stat">
            <span class="perf-stat-label">Active Leads</span>
            <span class="perf-stat-value">${leads.length}</span>
        </div>
        <div class="perf-stat">
            <span class="perf-stat-label">Tasks Completed</span>
            <span class="perf-stat-value">${tasks.filter(t => t.status === 'Completed').length}/${tasks.length}</span>
        </div>
    `;
}

// ==========================================
// MODAL
// ==========================================
function openModal(title, bodyHTML) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = bodyHTML;
    document.getElementById('modalOverlay').classList.add('active');
}

window.closeModal = function () {
    document.getElementById('modalOverlay').classList.remove('active');
};

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
});

// ==========================================
// TOAST
// ==========================================
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: 'bx-check-circle', error: 'bx-x-circle', info: 'bx-info-circle' };
    toast.innerHTML = `<i class='bx ${icons[type]}'></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ==========================================
// CHART (Simple Canvas Bar Chart)
// ==========================================
function drawBarChart(canvasId, labels, values, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const padding = { top: 20, right: 20, bottom: 40, left: 60 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;
    const maxVal = Math.max(...values) * 1.15;
    const barWidth = chartW / labels.length * 0.5;
    const gap = chartW / labels.length;

    ctx.clearRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding.top + (chartH / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(w - padding.right, y);
        ctx.stroke();

        // Y labels
        const val = Math.round(maxVal - (maxVal / 4) * i);
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.font = '11px Inter';
        ctx.textAlign = 'right';
        ctx.fillText(val >= 1000 ? (val / 1000).toFixed(0) + 'K' : val, padding.left - 10, y + 4);
    }

    // Bars
    labels.forEach((label, i) => {
        const x = padding.left + i * gap + (gap - barWidth) / 2;
        const barH = (values[i] / maxVal) * chartH;
        const y = padding.top + chartH - barH;

        // Bar gradient
        const grad = ctx.createLinearGradient(x, y, x, y + barH);
        grad.addColorStop(0, color);
        grad.addColorStop(1, color + '60');
        ctx.fillStyle = grad;

        // Rounded bar
        const r = Math.min(6, barWidth / 2);
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + barWidth - r, y);
        ctx.arcTo(x + barWidth, y, x + barWidth, y + r, r);
        ctx.lineTo(x + barWidth, y + barH);
        ctx.lineTo(x, y + barH);
        ctx.lineTo(x, y + r);
        ctx.arcTo(x, y, x + r, y, r);
        ctx.fill();

        // X label
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.font = '11px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(label, x + barWidth / 2, h - padding.bottom + 20);
    });
}

// ==========================================
// UTILITIES
// ==========================================
function formatNumber(num) {
    return num.toLocaleString('en-IN');
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

function animateCounter(id, target) {
    const el = document.getElementById(id);
    let current = 0;
    const increment = Math.ceil(target / 30);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = current;
    }, 30);
}

// Global search
document.getElementById('globalSearch').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    if (!q) {
        switchView(currentView);
        return;
    }
    // Search across customers
    if (currentView === 'customers') {
        renderCustomers('all', q);
    } else if (currentView === 'leads') {
        renderLeads(q);
    }
});

// Resize handler for charts
window.addEventListener('resize', () => {
    if (currentView === 'dashboard') {
        drawBarChart('revenueChart', REVENUE_DATA.labels, REVENUE_DATA.values, '#6366f1');
    } else if (currentView === 'analytics') {
        drawBarChart('salesChart', SALES_DATA.labels, SALES_DATA.values, '#8b5cf6');
    }
});
