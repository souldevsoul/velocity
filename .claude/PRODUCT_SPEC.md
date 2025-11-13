# Velocity - Complete Product Specification

## 🎯 Brand Concept & Vision

### What is Velocity?

**Velocity** is an AI-powered MVP development platform that combines instant AI-generated MVPs with expert task assignment and execution.

**The Core Innovation:**
We combine the speed of AI code generation with human expert implementation through a seamless hybrid workflow, credit-based system, and GitHub integration.

### Value Proposition

**For Startups & Entrepreneurs:**
- Generate production-ready MVPs in hours, not weeks
- Assign specific tasks to vetted experts for refinement
- Start free with 100 credits, pay only for what you use
- Affordable expert development without hiring full teams

**For Experts & Developers:**
- Access a stream of well-paying task assignments
- Work flexibly on interesting features
- Earn credits for each completed task
- Build portfolio with diverse projects

### Unique Selling Points

1. **AI MVP Generation** - Generate complete, functional MVPs instantly
2. **Expert Task Assignment** - Assign specific features to vetted developers
3. **Unified Credit System** - One credit system for AI generation and expert work
4. **GitHub Integration** - Seamless PR-based workflow
5. **Flexible Pricing** - Free tier with 100 credits, pay-as-you-go model
6. **Quality Assurance** - Expert review built into every task
7. **Full Ownership** - You own all generated code and completed work

---

## 🎨 Visual Brand Identity

### Brand Colors (CRITICAL - DO NOT DEVIATE!)

**Primary Palette (Emerald/Green):**
```
Emerald/Green Family:
- #10b981 (emerald-500) - Secondary emphasis
- #059669 (emerald-600) - Primary action color
- #047857 (emerald-700) - Hover states & depth

Blue/Indigo Family:
- #3B82F6 (blue-500) - Trust, professional
- #2563EB (blue-600) - Depth
- #6366F1 (indigo-500) - Creative accent
```

**Usage Rules:**
- Primary CTAs: Emerald/Blue gradients
- Secondary elements: Teal/Indigo
- Backgrounds: White/Slate-50
- Text: Slate-900 (headings), Slate-600 (body)

**NEVER Use (VoiceCraft template colors):**
- ❌ Yellow (`yellow-*`)
- ❌ Orange (`orange-*`)
- ❌ Harsh black borders
- ❌ Brutalist shadows

### Visual Style

**Typography:**
- Headings: Bold, modern (text-5xl, font-bold)
- Body: Readable, relaxed (text-lg, leading-relaxed)
- Accents: Semibold for emphasis

**Shadows (Soft & Professional):**
```css
shadow-soft-sm    - Subtle elevation
shadow-soft-md    - Card elevation
shadow-soft-lg    - Modal/popup elevation
shadow-soft-xl    - Hero element elevation
shadow-glow-emerald - Interactive glow effect
shadow-glow-teal    - Accent glow effect
```

**Corners (Smooth & Modern):**
```css
rounded-xl    - Buttons, cards
rounded-2xl   - Large cards, sections
rounded-3xl   - Hero elements
rounded-full  - Badges, avatars
```

**Spacing (Generous & Breathable):**
- Section padding: py-24 (desktop), py-16 (mobile)
- Card padding: p-8, p-10, p-12
- Element gaps: gap-6, gap-8
- Vertical rhythm: space-y-6, space-y-8

---

## 🔄 Core User Flows

### Flow 1: New User → Generate First MVP (AI Only)

```
1. User lands on homepage
   ↓
2. Clicks "Get Started Free" or "Start Building Free"
   ↓
3. [If not logged in] → Sign up (email/password)
   ↓
4. Account created with 100 free credits
   ↓
5. Arrives at /dashboard
   ↓
6. Clicks "Create Your First Project"
   ↓
7. Fills out project form:
   - Project name (required)
   - Project description (textarea)
   - Tech stack preferences (optional)
   ↓
8. Project created in database
   ↓
9. Navigates to project detail page
   ↓
10. Clicks "Generate MVP"
    ↓
11. Modal shows cost: 100 credits
    ↓
12. User confirms
    ↓
13. Credits reserved
    ↓
14. AI Processing:
    - Analyzes project description
    - Generates project structure
    - Creates components
    - Sets up database schema
    - Generates API routes
    - Configures styling
    ↓
15. Creates GitHub branch: mvp/[project-id]
    ↓
16. Commits all generated code
    ↓
17. Creates Pull Request on GitHub
    ↓
18. MVP Generated! User can:
    - View live preview
    - Review PR on GitHub
    - See code changes
    - Merge when ready
```

**Happy Path Checkpoints:**
- ✅ Sign up creates account with 100 credits
- ✅ Project form validates properly
- ✅ MVP generation shows progress
- ✅ Code generation completes
- ✅ GitHub PR created successfully
- ✅ Live preview available
- ✅ Credits deducted after completion

---

### Flow 2: User → Assign Task to Expert (Hybrid Path)

```
1. User has generated AI MVP
   ↓
2. Reviews generated code
   ↓
3. Identifies additional features needed
   ↓
4. Clicks "Add Task" on project page
   ↓
5. Task creation modal opens:
   - Task title (required)
   - Task description (required)
   - Priority (Low/Medium/High/Critical)
   - Estimated complexity
   ↓
6. Task created in database
   ↓
7. Task shows in project task list
   ↓
8. User clicks "Assign to Expert"
   ↓
9. System shows available experts
   ↓
10. User selects expert (or "Any Available")
    ↓
11. System calculates cost:
    - Simple: 10-30 credits
    - Medium: 30-60 credits
    - Complex: 60-100 credits
    ↓
12. [If insufficient credits] → Redirect to wallet to purchase
    ↓
13. Credits reserved from user wallet
    ↓
14. Expert receives notification
    ↓
15. Expert views task in their dashboard
    ↓
16. Expert accepts task
    ↓
17. Expert creates branch: feature/task-[id]
    ↓
18. Expert implements feature
    ↓
19. Expert creates PR linked to task
    ↓
20. User receives review notification
    ↓
21. User reviews PR on GitHub
    ↓
22. User approves or requests changes
    ↓
23. On approval:
    - Merges PR
    - Marks task complete
    - Credits transferred to expert
    - Task status: "Completed"
```

**Happy Path Checkpoints:**
- ✅ Task form validates properly
- ✅ Expert list displays correctly
- ✅ Credit cost calculated accurately
- ✅ Expert receives notification
- ✅ Expert can accept/decline
- ✅ PR created successfully
- ✅ User can review and approve
- ✅ Credits transferred on completion

---

### Flow 3: Returning User → Dashboard & Projects

```
1. User logs in
   ↓
2. Lands on /dashboard
   ↓
3. Sees:
   - Welcome message
   - Credit balance (prominent display)
   - Recent projects (list view)
   - Active tasks (status cards)
   - Quick actions buttons
   ↓
4. Clicks on past project
   ↓
5. Project detail page opens:
   - Project description
   - Generated MVP info
   - GitHub PR link
   - Task list (completed and pending)
   - "Generate Variations" button
   - "Add New Task" button
   ↓
6. User can:
   - View previous generated code
   - Create new variations
   - Add and assign new tasks
   - Check task status
   - Review expert work
```

**Happy Path Checkpoints:**
- ✅ All past projects visible
- ✅ Projects load with correct metadata
- ✅ GitHub links accessible
- ✅ Task status updates in real-time
- ✅ Can create new tasks on existing projects

---

## 💳 Credit System (Unified)

### Credit Economics

**What Credits Buy:**
- 100 credits = AI MVP generation (complete application)
- 10-30 credits = Simple expert task (small feature/bug fix)
- 30-60 credits = Medium expert task (new component/page)
- 60-100 credits = Complex expert task (full feature with backend)
- 5-10 credits = AI-powered code edits

### User Pricing Tiers

| Tier | Price | Initial Credits | Features |
|------|-------|-----------------|----------|
| **Free** | $0 | 100 (welcome) | MVP generation, task creation, expert assignment |
| **Plus** | $9.99+ | Variable | Purchase credits as needed, faster task queue |
| **Pro** | $79.99/mo | 1000+ | Bulk credits, priority support |

### Credit Purchase (À la carte)

For users who exceed initial credits:

| Package | Price | Credits |
|---------|-------|---------|
| Starter | $9.99 | 100 |
| Growth | $49.99 | 600 (17% savings) |
| Scale | $99.99 | 1,250 (25% savings) |
| Enterprise | $499.99 | 7,500 (33% savings) |

**Rules:**
- Credits never expire
- Free tier: 100 welcome credits
- Credits used immediately on action initiation
- Failed generations refund credits automatically
- Experts earn credits for completed tasks
- Admin can manually adjust balances for refunds

### Credit Flow Technical Implementation

**Database Schema:**
```prisma
model User {
  id             String @id @default(cuid())
  credits        Int @default(0)
  plan           String @default("free") // "free", "designer", "agency"
  planRenewsAt   DateTime?
}

model CreditTransaction {
  id          String @id @default(cuid())
  userId      String
  type        String // "purchase", "earn", "spend", "refund"
  amount      Int    // positive for add, negative for spend
  balance     Int    // balance after transaction
  description String
  relatedId   String? // logoId, designRequestId, etc.
  createdAt   DateTime @default(now())
}
```

**API Endpoints:**
```typescript
// Check balance
GET /api/credits/balance
Response: { credits: 25, plan: "designer" }

// Spend credits
POST /api/credits/spend
Body: { amount: 1, reason: "logo_generation", relatedId: "logo_123" }
Response: { success: true, newBalance: 24 }

// Purchase credits
POST /api/credits/purchase
Body: { package: "pro" } // 30 credits for $25
Response: { checkoutUrl: "stripe.com/checkout/..." }

// Stripe webhook handles credit addition after payment
```

---

## 🤖 AI Code Generation

### AI Models Used

**Primary: Anthropic Claude 3.5 Sonnet**
- **Purpose:** MVP code generation and architecture
- **Output:** Complete functional code (React, Node.js, etc.)
- **Speed:** 1-3 minutes per MVP generation
- **Best for:** Full-stack applications, complex business logic

**Secondary: OpenAI GPT-4 (optional fallback)**
- **Purpose:** Alternative AI code generation
- **Output:** Production-ready code
- **Speed:** 2-5 minutes per generation
- **Best for:** Specific language/framework needs

### MVP Generation Flow

```typescript
// /app/api/projects/[id]/mvp/route.ts

export async function POST(req: Request) {
  // 1. Parse request
  const { projectId, userId, description } = await req.json()

  // 2. Check user credits
  const user = await db.user.findUnique({ where: { id: userId }})
  if (user.credits < 100) {
    return Response.json({ error: "Insufficient credits" }, { status: 402 })
  }

  // 3. Reserve 100 credits
  await reserveCredits(userId, 100, "mvp_generation", projectId)

  // 4. Fetch project details
  const project = await db.project.findUnique({ where: { id: projectId }})

  // 5. Build MVP generation prompt
  const prompt = buildMVPPrompt(project.name, project.description)
  // Example: "Generate a complete MVP for 'Acme Coffee Shop' with:
  // - User authentication
  // - Product catalog
  // - Shopping cart
  // - Admin dashboard"

  // 6. Call Claude API with streaming
  try {
    const completion = await streamClaude(prompt)

    // 7. Save generated code
    const generatedCode = completion.text

    // 8. Create GitHub branch
    const branchName = `mvp/${projectId}-${Date.now()}`
    await createGitBranch(branchName)

    // 9. Commit generated code
    await commitCode(branchName, generatedCode)

    // 10. Create PR
    const prUrl = await createPullRequest(
      branchName,
      `MVP: ${project.name}`,
      generatePRDescription(project)
    )

    // 11. Update project with PR info
    await db.project.update({
      where: { id: projectId },
      data: {
        status: "mvp_generated",
        githubPrUrl: prUrl,
        generatedAt: new Date(),
      }
    })

    // 12. Deduct credits (confirmed successful)
    await deductCredits(userId, 100, "mvp_generation_completed", projectId)

    return Response.json({
      projectId,
      prUrl,
      status: "completed"
    })

  } catch (error) {
    // 13. Refund credits on failure
    await refundCredits(userId, 100, "mvp_generation_failed", projectId)
    return Response.json({ error: "MVP generation failed" }, { status: 500 })
  }
}
```

### Task Execution Handler

```typescript
// /app/api/tasks/[id]/execute/route.ts

export async function POST(req: Request) {
  const { taskId, expertId } = await req.json()

  // Get task details
  const task = await db.task.findUnique({
    where: { id: taskId },
    include: { project: true }
  })

  if (!task) {
    return Response.json({ error: "Task not found" }, { status: 404 })
  }

  try {
    // 1. Create branch for task
    const branchName = `feature/task-${taskId}`
    await createGitBranch(branchName)

    // 2. Update task status
    await db.task.update({
      where: { id: taskId },
      data: {
        status: "in_progress",
        assignedTo: expertId,
      }
    })

    // 3. Notify expert via email
    await sendEmail(expert.email, {
      subject: `New Task Assigned: ${task.title}`,
      body: generateTaskNotificationEmail(task)
    })

    // 4. Create in-app notification
    await createNotification(expertId, {
      type: "task_assigned",
      title: `Task assigned: ${task.title}`,
      taskId: taskId
    })

    return Response.json({
      taskId,
      branchName,
      status: "assigned"
    })

  } catch (error) {
    // Log error
    console.error("Task execution error:", error)
    return Response.json(
      { error: "Failed to execute task" },
      { status: 500 }
    )
  }
}
```

### MVP Generation Prompt Template

**Template Structure:**
```
You are an expert full-stack developer. Generate a complete, production-ready MVP for:

Project: {projectName}
Description: {description}
Tech Stack Preference: {techStackPreference or "React + Node.js + PostgreSQL"}

Requirements:
- Generate all necessary files and folder structure
- Include authentication system (signup/login)
- Create database schema with migrations
- Build API routes for core features
- Style with Tailwind CSS for professional UI
- Include error handling and validation
- Make it deployable to Vercel
- Include environment variable setup
- Add comprehensive comments for clarity

Features to include:
{featuresList}

Output Format:
- File paths and complete code
- Organized by component, route, and data model
- Production-ready quality
- Security best practices
```

**Feature-Specific Instructions:**

**Authentication:**
```
- User signup with email validation
- Secure password hashing (bcrypt)
- JWT or session-based auth
- Protected routes middleware
- User profile management
```

**Database:**
```
- PostgreSQL schema design
- Prisma ORM setup
- Migrations included
- Indexes for performance
- Relationships properly configured
```

**API Layer:**
```
- RESTful endpoints
- Proper HTTP status codes
- Error handling with meaningful messages
- Input validation
- Rate limiting consideration
```

**Frontend:**
```
- React components structure
- Responsive Tailwind CSS
- Form handling and validation
- Loading and error states
- Navigation setup
```

---

## 📄 Marketing Pages (Required)

### Homepage (/)

**Sections (in order):**

1. **Hero Section**
   - H1: "Ship Faster, Scale Smarter"
   - Tagline: "AI-powered MVP development with expert task execution"
   - Subheading: "Generate production-ready MVPs in hours. Assign specific tasks to vetted experts."
   - Primary CTA: "Get Started Free" → /dashboard
   - Secondary CTA: "How It Works" → #how-it-works
   - Video/screenshot: MVP generation in action

2. **Problem/Solution Section**
   - Problem: Traditional development takes weeks/months
   - Solution: Velocity generates MVPs instantly + expert refinement
   - Key metrics: "100+ credits free", "1000+ expert developers", "99% task completion rate"

3. **How It Works (3 Steps)**
   - Step 1: Create Project (icon + description)
   - Step 2: Generate MVP (icon + description)
   - Step 3: Assign Tasks to Experts (icon + description)

4. **Dual-Path Value Prop**
   - Left: "AI-Only Path" (fast, affordable, instant)
   - Right: "Expert Path" (quality, customized, refined)
   - Center: "Hybrid" (best of both - recommended)

5. **Features Grid (6 items)**
   - AI MVP Generation in Minutes
   - Expert Task Assignment
   - GitHub Integration (automatic PRs)
   - Credit-Based Flexible Pricing
   - Quality Assurance Built-In
   - 24/7 Expert Network

6. **Use Case Examples**
   - Card examples: Startup MVP, MVP Validation, Quick Proof-of-Concept
   - Each with icon, description, typical cost in credits

7. **Testimonials (3 cards)**
   - Customer photo (if available) or avatar
   - Quote about speed and quality
   - Name, role, company
   - 5-star rating

8. **Pricing Table (3 tiers)**
   - Free (100 credits), Plus (pay-as-you-go), Pro (bulk discounts)
   - Feature comparison
   - CTAs for each tier

9. **Final CTA Section**
   - H2: "Ready to Launch Your MVP?"
   - Primary CTA: "Start Building Free"
   - Secondary CTA: "See Pricing"
   - Trust badges: "No credit card required", "100 free credits included", "Join 1000+ developers"

**SEO Requirements:**
- Meta title: "Velocity - AI MVP Generator + Expert Developers"
- Meta description: "Generate production-ready MVPs with AI in hours. Assign tasks to vetted experts. Ship faster, scale smarter."
- Structured data: Organization, WebSite, Product, SoftwareApplication
- Open Graph images
- Twitter Card meta tags

---

### Pricing Page (/pricing)

**Layout:**

1. **Header**
   - H1: "Flexible, Transparent Pricing"
   - Subheading: "Start free with 100 credits, upgrade as you grow"

2. **Comparison Callout**
   - Compare: "AI-Only" vs "Hire Expert" vs "AI + Expert" paths
   - Show cost examples for each

3. **Three-Tier Comparison Table**

   **Free Tier:**
   - $0 upfront
   - 100 welcome credits
   - All core features
   - Create unlimited projects
   - Generate MVPs (100 credits each)
   - Post tasks for experts
   - CTA: "Start Free"

   **Plus Tier (MOST POPULAR):**
   - Pay as you go
   - $9.99 for 100 credits
   - Better rates on bulk purchases
   - Same features as Free
   - Faster expert task queue
   - Priority support
   - CTA: "Buy Credits"

   **Pro Tier:**
   - $79.99/month
   - 1000+ credits/month
   - All Plus features
   - 20% discount on credit packages
   - Dedicated expert account manager
   - Priority task queue
   - Advanced analytics
   - CTA: "Start Pro"

4. **à la Carte Credit Packages**
   - Starter: $9.99 for 100 credits
   - Growth: $49.99 for 600 credits (17% savings)
   - Scale: $99.99 for 1,250 credits (25% savings)
   - Enterprise: $499.99 for 7,500 credits (33% savings)

5. **Task Pricing by Complexity**
   - Simple Tasks: 10-30 credits
   - Medium Tasks: 30-60 credits
   - Complex Tasks: 60-100 credits
   - MVP Generation: 100 credits (flat rate)

6. **What Credits Buy**
   - Table showing credit costs for all features
   - Examples: MVP generation, task assignment, expert expertise

7. **FAQ Section**
   - "Do credits expire?" (No, never)
   - "Can I cancel my subscription?" (Yes, anytime)
   - "How much does an expert task cost?" (Depends on complexity)
   - "Can I refund unused credits?" (Contact support)
   - "Do I own the generated code?" (Yes, full ownership)

---

### Dashboard Pages (Authenticated)

#### /dashboard (Main Dashboard)

**Layout:**

1. **Top Navigation**
   - Logo (left)
   - Navigation: Projects, Tasks, Wallet, Settings
   - Credit balance badge (prominent, top-right)
   - User avatar dropdown (right)

2. **Welcome Hero Section**
   - Welcome message: "Welcome back, [Name]!"
   - Credit balance display with "Buy Credits" link
   - Primary CTA: "Create New Project" → /dashboard/projects/new
   - Quick stats: "Projects: X", "Active Tasks: X", "Credits: X"

3. **Recent Projects (List/Grid)**
   - Project name, description, status
   - Last updated date
   - MVP status indicator (generated/not generated)
   - Click opens project detail page
   - Empty state: "No projects yet. Create your first MVP!"

4. **Active Task Cards**
   - Assigned tasks (by expert)
   - Shows: task title, expert name, priority, deadline
   - Status bar (pending → in progress → review → completed)
   - Click to view task details
   - Empty state: "No active tasks"

5. **Quick Action Buttons**
   - "Generate MVP"
   - "Assign Task to Expert"
   - "Browse Expert Network"
   - "View Pricing Plans"

---

#### /dashboard/projects/new (Create Project Form)

**Form Fields:**

1. **Project Name** (required)
   - Text input
   - Placeholder: "My SaaS Product"
   - Character limit: 100
   - Help text: "Name for your MVP project"

2. **Project Description** (required)
   - Textarea
   - Placeholder: "Build an AI-powered task management tool for teams..."
   - Character limit: 1000
   - Help text: "Describe your product idea, features, and target users"

3. **Tech Stack Preference** (optional)
   - Multi-select checkboxes
   - Options: React, Vue, Next.js, Node.js, Python, PostgreSQL, MongoDB, Stripe integration, etc.
   - Default: "Let AI choose optimal stack"

4. **Key Features** (required)
   - Tag input (multi-select)
   - Suggestions: Authentication, Payment Processing, Dashboard, API, Real-time Updates, etc.
   - Limit: 5-8 tags

5. **Target Users** (optional)
   - Text input
   - Placeholder: "Freelancers, remote teams, startups"

6. **Budget (in credits)** (informational)
   - Shows estimated MVP generation cost: 100 credits
   - "Learn more" link to pricing

7. **Submit Button**
   - "Create Project & Generate MVP (100 credits)"
   - Disabled if insufficient credits
   - Shows credit cost clearly

**Validation:**
- All required fields must be filled
- Project name must be 5+ characters
- Description must be 20+ characters

**After Submit:**
- Project saved to database
- Redirect to /dashboard/projects/[id]
- MVP generation starts automatically

---

#### /dashboard/projects/[id] (Project Detail)

**Layout:**

1. **Project Header**
   - Project name (large heading)
   - Status badge (Draft / MVP Generated / In Progress)
   - Last updated timestamp
   - GitHub PR link (if MVP generated)

2. **MVP Generation Status**
   - If not generated:
     - "Generate MVP" button (100 credits)
     - Cost display with "?" tooltip explaining
   - If generated:
     - Live preview link
     - GitHub PR link (clickable)
     - "Regenerate MVP" button (cost: 100 credits)
     - Code preview/statistics

3. **Project Information Panel**
   - Original description
   - Tech stack used
   - Key features list
   - Target users
   - "Edit Project" link

4. **Task Management Section**

   **Create New Task**
   - Button: "Add Task"
   - Opens form with:
     - Task title
     - Task description
     - Priority (Low/Medium/High/Critical)
     - Estimated complexity

   **Task List (by status)**
   - Pending tasks: "Assign to Expert"
   - Assigned tasks: Expert name, status, deadline
   - Completed tasks: Expert name, completion date
   - Click task for details

5. **Action Buttons**
   - "View on GitHub" (external link to PR)
   - "Clone to Local" (instructions)
   - "Deploy Preview" (if available)
   - "Delete Project"

6. **Activity Timeline** (optional)
   - MVP generated date
   - Task milestones
   - Expert assignments
   - Code updates

---

#### /dashboard/wallet (Credits & Wallet)

**Sections:**

1. **Credit Balance Card**
   - Large display of current credit balance
   - Quick action: "Buy More Credits" button
   - Credit balance history graph (optional)

2. **Credit Purchase Packages**
   - Card layout for each package:
     - Package name
     - Price ($)
     - Credits included
     - Savings percentage (if bulk)
     - "Buy Now" button
   - Packages: Starter ($9.99, 100 credits) to Enterprise

3. **Subscription Plans** (optional)
   - Monthly subscription option
   - Annual subscription option
   - Auto-refill toggle
   - Benefits table

4. **Transaction History**
   - Table with columns: Date, Type, Amount, Credits, Balance
   - Filters: All, Purchases, Spending, Refunds
   - Date range picker
   - Sortable columns
   - Export button

5. **Spending Analytics** (optional)
   - Pie chart: MVP generations vs Task assignments
   - Bar chart: Credits spent over time
   - Summary stats: Total spent, Average per project

6. **Help Section**
   - "Why credits?" explanation
   - "How credits work" with examples
   - Link to pricing page

---

#### /dashboard/tasks (Task Management)

**Layout:**

1. **Header**
   - "My Tasks" heading
   - Filter buttons: All, Pending, Assigned, In Progress, Completed
   - Sort dropdown: Date Created, Deadline, Priority
   - "New Task" button

2. **Task Board/List View**

   **Pending Tasks Section**
   - Task cards with:
     - Task title
     - Project name
     - Priority badge (Low/Medium/High/Critical)
     - "Assign to Expert" button
     - "Delete" option
   - Empty state: "No pending tasks"

   **Assigned Tasks Section**
   - Task cards with:
     - Task title & description (truncated)
     - Assigned expert (name + avatar)
     - Status badge (Pending, In Progress, Review, Completed)
     - Progress bar
     - Deadline countdown
     - View PR link (if available)
   - Click to view full task details

   **Completed Tasks Section**
   - Task cards with:
     - Task title
     - Completed by (expert name)
     - Completion date
     - "View Results" link
   - Archive/Hide option

3. **Task Detail Modal/Page** (when clicked)
   - Task title & description
   - Project context
   - Assigned expert details (avatar, name, rating)
   - Status timeline
   - GitHub PR link
   - Cost in credits
   - Comments/updates from expert
   - "Request Changes" or "Approve" buttons (if in review)

4. **New Task Form Modal**
   - Task title (required)
   - Task description (required)
   - Project selection (dropdown)
   - Priority (Low/Medium/High/Critical)
   - Estimated complexity
   - "Create Task" button

---

#### /dashboard/tasks/[id]/review (Task Review)

**Layout:**

1. **Task Overview**
   - Task title (large heading)
   - Project name link
   - Task description
   - Original requirements

2. **Expert Info Card**
   - Avatar
   - Expert name
   - Rating (5-star)
   - Number of completed tasks
   - Response time
   - "Message Expert" button (opens chat)

3. **Status Timeline**
   - ✅ Task Created
   - ✅ Assigned to Expert
   - ✅ Expert Started
   - ⏳ PR Submitted for Review
   - ⏳ Awaiting Your Approval
   - ⏳ Completed

4. **Code Review Section**
   - GitHub PR embedded iframe
   - Diff view of changes
   - Files changed summary
   - "View on GitHub" link
   - Comment threads

5. **Expert Notes**
   - Expert-provided summary of changes
   - Testing notes
   - Any issues encountered
   - Recommendations

6. **Approval Actions**
   - "Approve & Merge" button (transfers credits to expert)
   - "Request Changes" button
   - Change request form:
     - "What needs to be changed?" (textarea)
     - Revision counter: "1 of 3 revisions remaining"

7. **Chat/Communication Thread**
   - Messages between user and expert
   - File attachments capability
   - Timestamps

8. **After Approval**
   - Task status: "Completed"
   - Credits transferred to expert
   - Option to leave review/rating

---

## 🔧 Technical Implementation Checklist

### Database (Prisma + PostgreSQL)

**Models Required:**

```prisma
// User & Auth
model User {
  id            String @id @default(cuid())
  email         String @unique
  name          String?
  role          Role @default(USER) // USER, EXPERT, ADMIN
  credits       Int @default(100)
  plan          String @default("free")
  planRenewsAt  DateTime?
  projects      Project[]
  tasks         Task[]
  transactions  CreditTransaction[]
  createdAt     DateTime @default(now())
}

enum Role {
  USER
  EXPERT
  ADMIN
}

// Project
model Project {
  id            String @id @default(cuid())
  userId        String
  user          User @relation(fields: [userId], references: [id], onDelete: Cascade)
  name          String
  description   String @db.Text
  techStack     String[]
  keyFeatures   String[]
  targetUsers   String?
  status        String @default("draft") // draft, mvp_generated, in_progress, completed
  githubPrUrl   String?
  generatedCode String? @db.Text
  generatedAt   DateTime?
  tasks         Task[]
  transactions  CreditTransaction[] // Track credits spent
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

// Task
model Task {
  id            String @id @default(cuid())
  projectId     String
  project       Project @relation(fields: [projectId], references: [id], onDelete: Cascade)
  title         String
  description   String @db.Text
  priority      String // "low", "medium", "high", "critical"
  complexity    String // "simple", "medium", "complex"
  status        String @default("pending") // pending, assigned, in_progress, review, completed, cancelled
  estimatedCost Int // Credits
  costCredits   Int? // Actual cost
  assignedTo    String? // Expert user ID
  expert        User? @relation(fields: [assignedTo], references: [id])
  githubPrUrl   String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  completedAt   DateTime?
}

// Credit Transactions (Ledger)
model CreditTransaction {
  id          String @id @default(cuid())
  userId      String
  user        User @relation(fields: [userId], references: [id], onDelete: Cascade)
  type        String // "purchase", "earn", "spend", "refund", "welcome"
  amount      Int // Positive = add, Negative = spend
  balance     Int // Balance after transaction
  description String
  projectId   String?
  project     Project? @relation(fields: [projectId], references: [id])
  taskId      String?
  relatedId   String? // For tracking specific purchases/generations
  createdAt   DateTime @default(now())
}

// Stripe Transactions
model StripeTransaction {
  id              String @id @default(cuid())
  userId          String
  stripeSessionId String @unique
  amount          Decimal // USD amount
  credits         Int
  status          String // pending, completed, failed, refunded
  createdAt       DateTime @default(now())
}
```

---

### API Routes Required

**Auth:**
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/user` - Get current user

**Credits:**
- `GET /api/credits/balance` - Get current balance
- `POST /api/credits/spend` - Deduct credits
- `POST /api/credits/refund` - Refund credits (admin)
- `POST /api/stripe/checkout` - Stripe checkout session
- `GET /api/credits/history` - Transaction history

**Projects:**
- `GET /api/projects` - List user's projects
- `POST /api/projects` - Create new project
- `GET /api/projects/[id]` - Get project details
- `PATCH /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project
- `POST /api/projects/[id]/mvp` - Generate MVP with AI

**Tasks:**
- `GET /api/tasks` - List user's tasks (filtered by role)
- `POST /api/tasks` - Create new task
- `GET /api/tasks/[id]` - Get task details
- `POST /api/tasks/[id]/assign` - Assign task to expert
- `PATCH /api/tasks/[id]` - Update task status
- `POST /api/tasks/[id]/approve` - Approve task completion
- `POST /api/tasks/[id]/cancel` - Cancel task and refund
- `DELETE /api/tasks/[id]` - Delete task

**AI Generation:**
- `POST /api/generate-ai-code-stream` - Stream AI code generation
- `POST /api/create-ai-sandbox-v2` - Create code sandbox
- `GET /api/sandbox-status` - Check sandbox status

**GitHub:**
- `POST /api/github/create-branch` - Create GitHub branch
- `POST /api/github/commit` - Commit code to branch
- `POST /api/github/create-pr` - Create pull request

**Admin:**
- `GET /api/admin/stats` - Platform statistics
- `GET /api/admin/users` - List all users
- `PATCH /api/admin/users/[id]` - Update user
- `GET /api/admin/tasks` - All tasks
- `GET /api/admin/transactions` - All transactions

**Webhooks:**
- `POST /api/webhooks/stripe` - Stripe payment events
- `POST /api/webhooks/github` - GitHub PR updates

---

### Environment Variables Needed

```env
# Database
DATABASE_URL="postgresql://..."

# AI & Code Generation
ANTHROPIC_API_KEY="sk-ant-..."
OPENAI_API_KEY="sk-..."

# GitHub Integration
GITHUB_TOKEN="ghp_..."
GITHUB_REPO_URL="https://github.com/..."
GITHUB_BOT_NAME="velocity-bot"

# E2B Sandbox (Code Execution)
E2B_API_KEY="e2b_..."

# Vercel Blob (File Storage)
BLOB_READ_WRITE_TOKEN="vercel_blob_..."

# Authentication
NEXTAUTH_SECRET="your-secret..."
NEXTAUTH_URL="https://velocity.com"

# Stripe (Payments)
STRIPE_SECRET_KEY="sk_live_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# App Config
NEXT_PUBLIC_APP_URL="https://velocity.com"

# Email Notifications
RESEND_API_KEY="re_..."
NOTIFICATION_EMAIL="notifications@velocity.com"

# Admin Emails
ADMIN_EMAILS="admin@velocity.com,support@velocity.com"

# Feature Flags
NEXT_PUBLIC_ENABLE_EXPERT_ASSIGNMENT=true
NEXT_PUBLIC_ENABLE_GITHUB_INTEGRATION=true
```

---

## ✅ End Goal Verification Checklist

### Marketing Pages Complete?
- [ ] Homepage has all 9 sections (hero, problem/solution, how-it-works, dual-path, features, use-cases, testimonials, pricing, CTA)
- [ ] Pricing page shows all 3 tiers + à la carte credit packages
- [ ] All CTAs lead to correct destinations
- [ ] SEO meta tags present
- [ ] Mobile responsive
- [ ] Design system consistent (emerald-600/#059669 primary, soft shadows)
- [ ] Tagline: "Ship Faster, Scale Smarter" prominent

### User Flows Working?
- [ ] New user can sign up (100 free credits awarded)
- [ ] User can create project
- [ ] MVP generation works (Claude AI integration)
- [ ] Generated MVPs appear in project detail
- [ ] GitHub PR created automatically
- [ ] User can create tasks
- [ ] User can assign tasks to experts
- [ ] Expert receives notification
- [ ] Credit system deducts properly

### Credit System Complete?
- [ ] Free tier: 100 welcome credits
- [ ] MVP generation costs: 100 credits
- [ ] Task assignment costs: 10-100 credits (by complexity)
- [ ] À la carte purchase works (Stripe)
- [ ] Credits deduct on MVP generation
- [ ] Credits deduct on task assignment
- [ ] Credits transferred to expert on approval
- [ ] Credits refund on failure/cancellation
- [ ] Credit balance displays correctly
- [ ] Credit transaction history visible

### AI Code Generation Working?
- [ ] API connection established (Claude/OpenAI)
- [ ] Prompt engineering implemented
- [ ] Generation request succeeds
- [ ] Code generates to GitHub PR
- [ ] Generated code is production-ready quality
- [ ] Failed generations refund credits
- [ ] Streaming shows progress to user

### GitHub Integration Working?
- [ ] Branch creation automated
- [ ] Code commits to branch
- [ ] Pull requests created with description
- [ ] PR links stored in database
- [ ] GitHub webhooks receive updates

### Database Schema Complete?
- [ ] All models defined in Prisma (User, Project, Task, CreditTransaction, StripeTransaction)
- [ ] Migrations run successfully
- [ ] Relationships configured correctly
- [ ] Indexes added for performance
- [ ] Role enum for USER/EXPERT/ADMIN

### Authentication Working?
- [ ] Sign up creates account with 100 credits
- [ ] Login authenticates user
- [ ] Protected routes secure
- [ ] Role-based access control working
- [ ] User profile accessible

### Expert/Developer Workflow Complete?
- [ ] Experts can view available tasks
- [ ] Experts can accept/decline tasks
- [ ] Experts can create PRs
- [ ] Users can review expert work
- [ ] Approval transfers credits to expert
- [ ] Expert can request revisions
- [ ] Final approval workflow works

---

## 🎨 Design System Confirmation

**Brand Colors (Emerald/Green):**
- ✅ Primary: #059669 (emerald-600) - CTAs, highlights
- ✅ Secondary: #10b981 (emerald-500) - Secondary elements
- ✅ Accent: #047857 (emerald-700) - Hover states, depth
- ✅ Support: #3B82F6 (blue-500) - Trust, professional
- ✅ Depth: #2563EB (blue-600) - Deep actions
- ✅ Creative: #6366F1 (indigo-500) - Accent elements
- ❌ NO Yellow
- ❌ NO Orange
- ❌ NO Harsh black borders

**Tagline & Brand Voice:**
- ✅ "Ship Faster, Scale Smarter" as primary tagline
- ✅ Professional yet creative tone
- ✅ Focus on speed and quality
- ✅ Empowering developers and entrepreneurs

**Visual Style:**
- ✅ Soft shadows (shadow-soft-sm/md/lg)
- ✅ Smooth corners (rounded-xl/2xl/3xl)
- ✅ Generous spacing (py-24, gap-8)
- ✅ Modern, tech-forward aesthetic
- ✅ Clear hierarchy and readability

**User Roles & Personas:**
- ✅ Regular User: Entrepreneurs/Startups wanting MVPs
- ✅ Expert/Developer: Skilled developers earning credits
- ✅ Admin: Platform managers and moderators

**Core Features:**
- ✅ AI MVP Generation (100 credits)
- ✅ Expert Task Assignment (10-100 credits)
- ✅ GitHub Integration (automatic PRs)
- ✅ Credit-Based Economy
- ✅ Project Management
- ✅ Code Review Workflow
- ✅ Payment Processing (Stripe)
- ✅ Real-time Notifications

---

This is the complete, comprehensive specification for Velocity as an AI-powered MVP development platform with expert task assignment. Every flow, every page, every technical detail is documented here.

**Platform Status:** Ready for implementation
