import {
  ExperienceItem,
  Language,
  ProjectItem,
  SkillGroup,
  TestimonialItem,
} from '../types/portfolio';

export const profileData = {
  name: 'Minh Nguyễn',
  monogram: 'MN',
  handle: 'minhnguyen.dev',
  email: 'hello@minhnguyen.dev',
  avatarUrl: '/images/client-3.jpg',
  workspaceImageUrl: '/images/workspace-setup.jpg',
  teamImageUrl: '/images/team-collab.jpg',
  location: {
    vi: 'TP. Hồ Chí Minh, Việt Nam (Remote Global)',
    en: 'Ho Chi Minh City, Vietnam (Remote Global)',
  },
  availability: {
    vi: 'Sẵn sàng cho dự án mới & vị trí Senior Full-Stack',
    en: 'Available for select projects & Senior Full-Stack roles',
  },
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    x: 'https://x.com',
  },
  cvUrl: '#contact',
};

export const uiCopy: Record<
  Language,
  {
    nav: {
      about: string;
      projects: string;
      experience: string;
      contact: string;
      resume: string;
    };
    hero: {
      roleLabel: string;
      headlinePrefix: string;
      headlineHighlight: string;
      headlineSuffix: string;
      subheadline: string;
      primaryCta: string;
      copyEmail: string;
      copiedEmail: string;
      terminalTitle: string;
      metrics: { value: string; label: string }[];
    };
    about: {
      eyebrow: string;
      title: string;
      description: string;
      principlesTitle: string;
      principles: { title: string; desc: string }[];
      skillsTitle: string;
      skillsHint: string;
    };
    projects: {
      eyebrow: string;
      title: string;
      subtitle: string;
      categories: { id: 'all' | 'fullstack' | 'frontend' | 'architecture'; label: string }[];
      activeSkillLabel: string;
      clearSkill: string;
      emptyTitle: string;
      emptyDesc: string;
      resetFilters: string;
      viewCaseStudy: string;
      modal: {
        role: string;
        timeline: string;
        team: string;
        challenge: string;
        solution: string;
        architecture: string;
        outcomes: string;
        snippet: string;
        liveDemo: string;
        sourceCode: string;
        close: string;
      };
    };
    experience: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    testimonials: {
      eyebrow: string;
      title: string;
      subtitle: string;
      verifiedBadge: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      subtitle: string;
      directTitle: string;
      copyLabel: string;
      copiedLabel: string;
      responseTime: string;
      form: {
        name: string;
        namePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        topic: string;
        topics: string[];
        message: string;
        messagePlaceholder: string;
        submit: string;
        sending: string;
        successTitle: string;
        successDesc: string;
        sendAnother: string;
      };
    };
    footer: {
      builtWith: string;
      backToTop: string;
    };
  }
> = {
  vi: {
    nav: {
      about: 'Giới thiệu',
      projects: 'Dự án',
      experience: 'Kinh nghiệm',
      contact: 'Liên hệ',
      resume: 'Tải CV',
    },
    hero: {
      roleLabel: 'Full-Stack & Frontend Engineer',
      headlinePrefix: 'Kiến tạo sản phẩm web ',
      headlineHighlight: 'tinh gọn & hiệu năng cao',
      headlineSuffix: ' từ giao diện đến hệ thống.',
      subheadline:
        'Tôi chuyên thiết kế giao diện React/TypeScript sắc nét chuẩn pixel kết hợp kiến trúc backend bền vững — biến các bài toán phức tạp thành trải nghiệm mượt mà, dễ mở rộng.',
      primaryCta: 'Xem dự án tiêu biểu',
      copyEmail: 'Sao chép Email',
      copiedEmail: 'Đã sao chép!',
      terminalTitle: 'system.profile.ts',
      metrics: [
        { value: '5+ năm', label: 'Kinh nghiệm thực chiến' },
        { value: '24+', label: 'Sản phẩm đã triển khai' },
        { value: '99/100', label: 'Core Web Vitals' },
        { value: '< 45ms', label: 'Độ trễ API trung bình' },
      ],
    },
    about: {
      eyebrow: '01 / Tư duy & Công nghệ',
      title: 'Kỹ thuật chính xác kết hợp thẩm mỹ tối giản',
      description:
        'Với hơn 5 năm phát triển các ứng dụng SaaS, Fintech và công cụ lập trình, tôi tập trung vào tốc độ tải trang, khả năng tiếp cận (a11y), mã nguồn sạch và sự đồng bộ giữa Design System với kiến trúc dữ liệu.',
      principlesTitle: 'Nguyên tắc làm việc',
      principles: [
        {
          title: 'Hiệu năng là tính năng cốt lõi',
          desc: 'Tối ưu bundle, rendering và truy vấn database ngay từ thiết kế ban đầu thay vì vá lỗi về sau.',
        },
        {
          title: 'Type-safe xuyên suốt Full-Stack',
          desc: 'Chia sẻ schema TypeScript end-to-end từ PostgreSQL/API đến React UI để loại bỏ lỗi runtime.',
        },
        {
          title: 'Giao diện có chủ đích',
          desc: 'Mỗi micro-interaction, khoảng trắng và trạng thái phản hồi đều phục vụ trải nghiệm người dùng.',
        },
      ],
      skillsTitle: 'Hệ sinh thái công nghệ',
      skillsHint: 'Nhấn vào kỹ năng bất kỳ để lọc dự án tương ứng',
    },
    projects: {
      eyebrow: '02 / Dự án tiêu biểu',
      title: 'Case Study & Kiến trúc thực tế',
      subtitle:
        'Chọn danh mục hoặc kỹ năng để lọc dự án, và mở Case Study để xem chi tiết bài toán kỹ thuật, kiến trúc và kết quả.',
      categories: [
        { id: 'all', label: 'Tất cả' },
        { id: 'fullstack', label: 'Full-Stack' },
        { id: 'frontend', label: 'Frontend & UI' },
        { id: 'architecture', label: 'System Design' },
      ],
      activeSkillLabel: 'Đang lọc theo kỹ năng:',
      clearSkill: 'Bỏ lọc',
      emptyTitle: 'Không tìm thấy dự án phù hợp',
      emptyDesc: 'Hãy thử bỏ bộ lọc kỹ năng hoặc chuyển về danh mục Tất cả.',
      resetFilters: 'Đặt lại bộ lọc',
      viewCaseStudy: 'Xem Case Study',
      modal: {
        role: 'Vai trò',
        timeline: 'Thời gian',
        team: 'Quy mô nhóm',
        challenge: 'Bài toán & Bối cảnh',
        solution: 'Giải pháp kỹ thuật',
        architecture: 'Điểm nhấn kiến trúc',
        outcomes: 'Kết quả định lượng',
        snippet: 'Đoạn mã tiêu biểu',
        liveDemo: 'Xem bản chạy thử',
        sourceCode: 'Mã nguồn GitHub',
        close: 'Đóng (Esc)',
      },
    },
    experience: {
      eyebrow: '03 / Kinh nghiệm làm việc',
      title: 'Hành trình xây dựng sản phẩm',
      subtitle: 'Đồng hành cùng các đội ngũ kỹ thuật để đưa sản phẩm từ MVP đến quy mô hàng trăm nghìn người dùng.',
    },
    testimonials: {
      eyebrow: '04 / Đánh giá thực tế',
      title: 'Đồng nghiệp & Khách hàng nói gì',
      subtitle: 'Phản hồi từ các Engineering Leader và Product Lead từng trực tiếp làm việc cùng tôi qua nhiều dự án production.',
      verifiedBadge: 'Đã xác thực qua LinkedIn',
    },
    contact: {
      eyebrow: '05 / Kết nối',
      title: 'Cùng xây dựng sản phẩm tiếp theo',
      subtitle:
        'Bạn đang tìm kiếm Senior Frontend/Full-Stack Engineer cho đội ngũ hoặc cần tư vấn phát triển sản phẩm web? Hãy gửi lời nhắn cho tôi.',
      directTitle: 'Liên hệ trực tiếp',
      copyLabel: 'Sao chép email',
      copiedLabel: 'Đã sao chép vào clipboard',
      responseTime: 'Thường phản hồi trong vòng 24 giờ làm việc.',
      form: {
        name: 'Họ và tên',
        namePlaceholder: 'Nguyễn Văn A',
        email: 'Email của bạn',
        emailPlaceholder: 'ban@congty.com',
        topic: 'Chủ đề trao đổi',
        topics: [
          'Cơ hội Full-time / Senior Role',
          'Dự án Freelance / Tư vấn kỹ thuật',
          'Thiết kế Design System & Frontend',
          'Khác',
        ],
        message: 'Nội dung chi tiết',
        messagePlaceholder: 'Chia sẻ ngắn gọn về sản phẩm, mục tiêu hoặc thời gian dự kiến của bạn...',
        submit: 'Gửi tin nhắn',
        sending: 'Đang gửi...',
        successTitle: 'Đã nhận được tin nhắn!',
        successDesc: 'Cảm ơn bạn đã liên hệ. Tôi sẽ kiểm tra và phản hồi qua email trong thời gian sớm nhất.',
        sendAnother: 'Gửi tin nhắn khác',
      },
    },
    footer: {
      builtWith: 'Thiết kế & lập trình với React, TypeScript & Tailwind CSS.',
      backToTop: 'Lên đầu trang',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      roleLabel: 'Full-Stack & Frontend Engineer',
      headlinePrefix: 'Engineering ',
      headlineHighlight: 'fast, resilient web',
      headlineSuffix: ' products from pixels to production.',
      subheadline:
        'I craft pixel-precise React & TypeScript interfaces backed by scalable APIs — turning complex workflows into intuitive, sub-50ms digital products.',
      primaryCta: 'Explore Selected Work',
      copyEmail: 'Copy Email',
      copiedEmail: 'Copied!',
      terminalTitle: 'system.profile.ts',
      metrics: [
        { value: '5+ yrs', label: 'Production Experience' },
        { value: '24+', label: 'Products Shipped' },
        { value: '99/100', label: 'Core Web Vitals' },
        { value: '< 45ms', label: 'Avg. API Latency' },
      ],
    },
    about: {
      eyebrow: '01 / Philosophy & Stack',
      title: 'Precision engineering meets minimal craft',
      description:
        'Over the past 5+ years building SaaS, Fintech, and developer tools, I have focused on runtime speed, accessibility, clean abstractions, and bridging Design Systems with backend reliability.',
      principlesTitle: 'Engineering Principles',
      principles: [
        {
          title: 'Performance as a First-Class Feature',
          desc: 'Bundle budgets, render scheduling, and query indexing are designed up front — not bolted on later.',
        },
        {
          title: 'End-to-End Type Safety',
          desc: 'Shared TypeScript contracts from PostgreSQL schemas to React state eliminate entire classes of bugs.',
        },
        {
          title: 'Intentional User Interfaces',
          desc: 'Every transition, spacing token, and empty state serves clarity and keyboard-first ergonomics.',
        },
      ],
      skillsTitle: 'Technical Ecosystem',
      skillsHint: 'Click any skill pill to filter matching projects below',
    },
    projects: {
      eyebrow: '02 / Selected Work',
      title: 'Case Studies & Shipped Systems',
      subtitle:
        'Filter by domain or technology stack, and open any Case Study to inspect architectural decisions, code patterns, and measured outcomes.',
      categories: [
        { id: 'all', label: 'All Work' },
        { id: 'fullstack', label: 'Full-Stack' },
        { id: 'frontend', label: 'Frontend & UI' },
        { id: 'architecture', label: 'System Design' },
      ],
      activeSkillLabel: 'Filtered by skill:',
      clearSkill: 'Clear',
      emptyTitle: 'No matching projects found',
      emptyDesc: 'Try clearing the active skill filter or switching back to All Work.',
      resetFilters: 'Reset Filters',
      viewCaseStudy: 'Read Case Study',
      modal: {
        role: 'Role',
        timeline: 'Timeline',
        team: 'Team',
        challenge: 'The Challenge',
        solution: 'Technical Solution',
        architecture: 'Architecture Highlights',
        outcomes: 'Measured Outcomes',
        snippet: 'Implementation Snapshot',
        liveDemo: 'Live Preview',
        sourceCode: 'GitHub Repo',
        close: 'Close (Esc)',
      },
    },
    experience: {
      eyebrow: '03 / Experience',
      title: 'Where I’ve Built & Led',
      subtitle: 'Partnering with product teams to scale web platforms from zero-to-one MVP to hundreds of thousands of users.',
    },
    testimonials: {
      eyebrow: '04 / Endorsements',
      title: 'Trusted by Engineering & Product Leaders',
      subtitle: 'Direct feedback from CTOs, product heads, and founders I have partnered with across shipped production systems.',
      verifiedBadge: 'Verified colleague',
    },
    contact: {
      eyebrow: '05 / Contact',
      title: 'Let’s build something remarkable',
      subtitle:
        'Looking for a Senior Frontend or Full-Stack Engineer to elevate your product, design system, or web architecture? Drop me a line.',
      directTitle: 'Direct Channels',
      copyLabel: 'Copy email',
      copiedLabel: 'Copied to clipboard',
      responseTime: 'Usually replies within 24 business hours.',
      form: {
        name: 'Your Name',
        namePlaceholder: 'Alex Tran',
        email: 'Email Address',
        emailPlaceholder: 'alex@company.com',
        topic: 'Inquiry Topic',
        topics: [
          'Full-time / Senior Engineering Role',
          'Freelance Product / Technical Advisory',
          'Design System & Frontend Architecture',
          'Other',
        ],
        message: 'Project Details',
        messagePlaceholder: 'Tell me briefly about your product, goals, or timeline...',
        submit: 'Send Message',
        sending: 'Sending...',
        successTitle: 'Message received!',
        successDesc: 'Thanks for reaching out. I will review your note and get back to you shortly.',
        sendAnother: 'Send another message',
      },
    },
    footer: {
      builtWith: 'Designed & engineered with React, TypeScript & Tailwind CSS.',
      backToTop: 'Back to top',
    },
  },
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: { vi: 'Frontend & Giao diện', en: 'Frontend & UI Craft' },
    skills: [
      { name: 'React', level: 'Expert', filterable: true },
      { name: 'TypeScript', level: 'Expert', filterable: true },
      { name: 'Next.js', level: 'Expert', filterable: true },
      { name: 'Tailwind CSS', level: 'Expert', filterable: true },
      { name: 'Framer Motion', level: 'Advanced', filterable: false },
      { name: 'Vite', level: 'Advanced', filterable: true },
    ],
  },
  {
    id: 'backend',
    title: { vi: 'Backend & Dữ liệu', en: 'Backend & Data' },
    skills: [
      { name: 'Node.js', level: 'Expert', filterable: true },
      { name: 'PostgreSQL', level: 'Advanced', filterable: true },
      { name: 'Redis', level: 'Advanced', filterable: true },
      { name: 'WebSockets', level: 'Advanced', filterable: true },
      { name: 'GraphQL / tRPC', level: 'Advanced', filterable: false },
      { name: 'Python', level: 'Intermediate', filterable: true },
    ],
  },
  {
    id: 'infra',
    title: { vi: 'Kiến trúc & Vận hành', en: 'Architecture & DevOps' },
    skills: [
      { name: 'Docker', level: 'Advanced', filterable: true },
      { name: 'Design Systems', level: 'Expert', filterable: false },
      { name: 'CI/CD & Testing', level: 'Advanced', filterable: false },
      { name: 'Web Performance', level: 'Expert', filterable: false },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'pulseops-apm',
    year: '2026',
    category: 'fullstack',
    categoryLabel: { vi: 'Full-Stack SaaS', en: 'Full-Stack SaaS' },
    title: 'PulseOps APM',
    tagline: {
      vi: 'Nền tảng giám sát hiệu năng & log thời gian thực cho microservices',
      en: 'Real-time observability & distributed tracing platform for cloud teams',
    },
    summary: {
      vi: 'Bảng điều khiển telemetry xử lý hơn 50.000 sự kiện/giây với biểu đồ streaming mượt 60fps, cảnh báo thông minh và truy vấn log tức thì.',
      en: 'High-throughput telemetry console ingesting 50k+ events/sec with 60fps streaming charts, anomaly alerting, and sub-second log search.',
    },
    role: { vi: 'Lead Full-Stack Engineer', en: 'Lead Full-Stack Engineer' },
    timeline: '6 tháng · 2025 – 2026',
    teamSize: { vi: '4 kỹ sư', en: '4 engineers' },
    impactBadge: { vi: '60fps @ 50k events/s', en: '60fps @ 50k events/s' },
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets', 'Tailwind CSS'],
    mockupType: 'observability',
    imageUrl: '/images/project-pulseops.jpg',
    imageAlt: {
      vi: 'Giao diện bảng điều khiển giám sát hiệu năng thời gian thực PulseOps trên MacBook',
      en: 'PulseOps real-time telemetry and latency dashboard displayed on a MacBook',
    },
    liveUrl: 'https://example.com/pulseops',
    repoUrl: 'https://github.com',
    caseStudy: {
      challenge: {
        vi: 'Hệ thống dashboard cũ bị giật lag nghiêm trọng (UI freeze 3–5 giây) khi nhận burst log từ các cụm Kubernetes, khiến đội ngũ SRE khó khoanh vùng sự cố trong giờ cao điểm.',
        en: 'Legacy dashboards froze for 3–5 seconds during Kubernetes traffic spikes, preventing SRE teams from triaging live incidents quickly.',
      },
      solution: {
        vi: 'Thiết kế pipeline WebSocket nén dữ liệu theo batch kết hợp Web Worker phân tách parse JSON khỏi main thread, cùng bảng ảo hóa (virtualized log viewer) và ring-buffer trong React.',
        en: 'Built a batched WebSocket ingestion pipeline paired with a Web Worker JSON parser, React ring-buffer store, and virtualized log table.',
      },
      architectureHighlights: [
        {
          vi: 'Web Worker giảm 82% tải main-thread khi render 10.000 dòng log đồng thời.',
          en: 'Offloaded telemetry parsing to Web Workers, cutting main-thread blocking by 82%.',
        },
        {
          vi: 'Timescale/PostgreSQL partitioning giúp truy vấn lịch sử 30 ngày nhanh hơn 4.3x.',
          en: 'PostgreSQL time-partitioned tables accelerated 30-day trace queries by 4.3x.',
        },
        {
          vi: 'Command Palette (Cmd+K) lọc theo service, status code và latency percentile.',
          en: 'Keyboard-first Cmd+K query bar filtering by service, status code, and p99 latency.',
        },
      ],
      metrics: [
        { label: { vi: 'Độ mượt UI', en: 'UI Frame Rate' }, value: '60 fps' },
        { label: { vi: 'Giảm MTTR sự cố', en: 'MTTR Reduction' }, value: '-54%' },
        { label: { vi: 'Tốc độ truy vấn', en: 'Query Speedup' }, value: '4.3x' },
      ],
      codeSnippet: {
        filename: 'useTelemetryBuffer.ts',
        code: `export function useTelemetryBuffer<T>(maxSize = 2000) {
  const bufferRef = useRef<T[]>([]);
  const [snapshot, setSnapshot] = useState<T[]>([]);

  const pushBatch = useCallback((items: T[]) => {
    const next = [...bufferRef.current, ...items].slice(-maxSize);
    bufferRef.current = next;
    requestAnimationFrame(() => setSnapshot(next));
  }, [maxSize]);

  return { snapshot, pushBatch };
}`,
      },
    },
  },
  {
    id: 'payflow-ledger',
    year: '2025',
    category: 'fullstack',
    categoryLabel: { vi: 'Fintech Platform', en: 'Fintech Platform' },
    title: 'PayFlow Ledger',
    tagline: {
      vi: 'Cổng thanh toán đa tiền tệ & hệ thống đối soát giao dịch tự động',
      en: 'Multi-currency checkout SDK & double-entry merchant settlement engine',
    },
    summary: {
      vi: 'Xây dựng luồng checkout tối ưu tỷ lệ chuyển đổi cùng hệ thống sổ cái double-entry đảm bảo tính toàn vẹn tài chính tuyệt đối.',
      en: 'High-conversion checkout experience backed by an idempotent double-entry ledger supporting multi-currency settlements.',
    },
    role: { vi: 'Senior Full-Stack Developer', en: 'Senior Full-Stack Developer' },
    timeline: '5 tháng · 2025',
    teamSize: { vi: '6 thành viên', en: '6 members' },
    impactBadge: { vi: '+28% checkout conversion', en: '+28% checkout conversion' },
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    mockupType: 'fintech',
    imageUrl: '/images/project-payflow.jpg',
    imageAlt: {
      vi: 'Kiểm thử luồng thanh toán đa thiết bị và đối soát PayFlow trên laptop và điện thoại',
      en: 'Multi-device PayFlow checkout and merchant settlement testing on laptop and smartphone',
    },
    liveUrl: 'https://example.com/payflow',
    repoUrl: 'https://github.com',
    caseStudy: {
      challenge: {
        vi: 'Trang thanh toán trước đây tải chậm trên mạng di động 4G và thiếu cơ chế idempotency khi người dùng nhấn thanh toán nhiều lần do mất kết nối.',
        en: 'Previous checkout pages suffered slow 4G mobile load times and lacked strict idempotency keys during flaky network retries.',
      },
      solution: {
        vi: 'Tái kiến trúc Checkout với Next.js App Router + Edge Caching, kết hợp Redis distributed lock và idempotency key ở tầng PostgreSQL transaction.',
        en: 'Re-architected Checkout with Next.js Edge rendering, Redis distributed locks, and PostgreSQL serializable ledger transactions.',
      },
      architectureHighlights: [
        {
          vi: 'Zero duplicate charges nhờ Idempotency Middleware & trạng thái state-machine rõ ràng.',
          en: 'Eliminated duplicate charges via strict Idempotency Middleware and deterministic state machines.',
        },
        {
          vi: 'Giảm kích thước JS bundle trang checkout từ 410KB xuống còn 88KB gzipped.',
          en: 'Trimmed checkout client JS bundle from 410KB down to 88KB gzipped.',
        },
        {
          vi: 'Tự động đối soát webhook bất đồng bộ với exponential backoff retry.',
          en: 'Asynchronous webhook reconciliation pipeline with exponential backoff and dead-letter alerts.',
        },
      ],
      metrics: [
        { label: { vi: 'Tỷ lệ hoàn tất đơn', en: 'Conversion Lift' }, value: '+28%' },
        { label: { vi: 'Thời gian tải LCP', en: 'Mobile LCP' }, value: '0.9s' },
        { label: { vi: 'Sai lệch đối soát', en: 'Ledger Discrepancy' }, value: '0.00%' },
      ],
      codeSnippet: {
        filename: 'settlement.service.ts',
        code: `export async function commitIdempotentTransfer(key: string, payload: TransferInput) {
  return db.transaction(async (tx) => {
    const existing = await tx.findLedgerByKey(key);
    if (existing) return existing;

    await tx.verifyAvailableBalance(payload.sourceAccount, payload.amount);
    return tx.insertDoubleEntry({ key, ...payload });
  });
}`,
      },
    },
  },
  {
    id: 'kinetix-ui',
    year: '2025',
    category: 'frontend',
    categoryLabel: { vi: 'Design System', en: 'Design System' },
    title: 'Kinetix UI System',
    tagline: {
      vi: 'Thư viện 45+ React components chuẩn WCAG AA cho 6 sản phẩm nội bộ',
      en: 'Accessible 45+ component React design system powering 6 product squads',
    },
    summary: {
      vi: 'Hệ thống thiết kế đa thương hiệu với token hóa màu sắc/typography, hỗ trợ keyboard navigation đầy đủ và tài liệu tương tác.',
      en: 'Multi-brand token architecture with headless primitives, complete keyboard ergonomics, and interactive documentation.',
    },
    role: { vi: 'Frontend Architect', en: 'Frontend Architect' },
    timeline: '4 tháng · 2025',
    teamSize: { vi: '3 kỹ sư & 2 designer', en: '3 engineers & 2 designers' },
    impactBadge: { vi: '3x faster UI delivery', en: '3x faster UI delivery' },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    mockupType: 'design-system',
    imageUrl: '/images/project-kinetix.jpg',
    imageAlt: {
      vi: 'Hệ thống giao diện và phân tích thành phần Kinetix UI trên màn hình MacBook',
      en: 'Kinetix UI component architecture and analytics dashboard on a MacBook display',
    },
    liveUrl: 'https://example.com/kinetix',
    repoUrl: 'https://github.com',
    caseStudy: {
      challenge: {
        vi: 'Sáu nhóm sản phẩm tự viết lại Modal, Table, Select dẫn đến giao diện thiếu đồng bộ, lỗi focus trap và chi phí bảo trì CSS phình to.',
        en: 'Six product squads maintained duplicate Modals, Tables, and Selects, causing visual drift, broken focus management, and bloated CSS.',
      },
      solution: {
        vi: 'Xây dựng monorepo Design System phân lớp: Design Tokens -> Headless Primitives -> Styled Components, đóng gói tree-shakeable bằng Vite.',
        en: 'Built a layered monorepo Design System separating semantic tokens from accessible primitives, shipped as tree-shakeable ESM packages.',
      },
      architectureHighlights: [
        {
          vi: 'Đạt chuẩn WCAG 2.1 AA về tương phản màu, ARIA attributes và điều hướng bàn phím.',
          en: 'Automated WCAG 2.1 AA contrast, ARIA roles, and roving-tabindex keyboard checks.',
        },
        {
          vi: 'Visual regression testing tự động chặn vỡ layout trước khi merge PR.',
          en: 'Automated visual regression diffs integrated into GitHub PR checks.',
        },
        {
          vi: 'Hỗ trợ chuyển đổi theme Dark/Light/High-Contrast chỉ bằng CSS custom properties.',
          en: 'Runtime theme switching via zero-overhead CSS custom properties.',
        },
      ],
      metrics: [
        { label: { vi: 'Tốc độ ra tính năng', en: 'Feature Velocity' }, value: '3.1x' },
        { label: { vi: 'Số lượng Component', en: 'Core Components' }, value: '48+' },
        { label: { vi: 'Điểm Accessibility', en: 'Lighthouse A11y' }, value: '100/100' },
      ],
      codeSnippet: {
        filename: 'Button.tsx',
        code: `export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, children, ...props }, ref) => (
    <button
      ref={ref}
      aria-busy={loading}
      className={cn(buttonVariants({ variant, size }))}
      {...props}
    >
      {loading ? <Spinner className="mr-2 h-4 w-4" /> : null}
      {children}
    </button>
  )
);`,
      },
    },
  },
  {
    id: 'codelens-ai',
    year: '2024',
    category: 'architecture',
    categoryLabel: { vi: 'Developer Tool', en: 'Developer Tool' },
    title: 'CodeLens Reviewer',
    tagline: {
      vi: 'Công cụ phân tích AST & gợi ý kiến trúc tự động cho Pull Request',
      en: 'Static AST dependency analyzer & automated PR architecture reviewer',
    },
    summary: {
      vi: 'Trực quan hóa đồ thị phụ thuộc module và phát hiện sớm vòng lặp import, code smell hoặc vi phạm ranh giới domain ngay trên trình duyệt.',
      en: 'Interactive module dependency graph visualizer detecting circular imports, domain boundary leaks, and complexity spikes.',
    },
    role: { vi: 'Creator & Full-Stack Dev', en: 'Creator & Full-Stack Dev' },
    timeline: '3 tháng · 2024',
    teamSize: { vi: '2 kỹ sư', en: '2 engineers' },
    impactBadge: { vi: '1.8k+ GitHub Stars', en: '1.8k+ GitHub Stars' },
    stack: ['React', 'TypeScript', 'Python', 'Docker', 'Tailwind CSS'],
    mockupType: 'codelens',
    imageUrl: '/images/project-codelens.jpg',
    imageAlt: {
      vi: 'Môi trường phân tích mã nguồn và kiểm tra phụ thuộc CodeLens Reviewer',
      en: 'CodeLens Reviewer static code analysis and dependency workspace on MacBook Pro',
    },
    liveUrl: 'https://example.com/codelens',
    repoUrl: 'https://github.com',
    caseStudy: {
      challenge: {
        vi: 'Các codebase TypeScript lớn thường phát sinh circular dependencies âm thầm làm chậm HMR và gây lỗi thứ tự khởi tạo module.',
        en: 'Growing TypeScript monorepos accumulate silent circular dependencies that degrade HMR and trigger subtle runtime init bugs.',
      },
      solution: {
        vi: 'Kết hợp AST parser tốc độ cao chạy trong container Docker với giao diện đồ thị SVG tương tác cho phép zoom/lọc theo thư mục.',
        en: 'Paired a containerized AST graph analyzer with an interactive canvas/SVG explorer to pinpoint boundary violations on every PR.',
      },
      architectureHighlights: [
        {
          vi: 'Phân tích 1.200 file TypeScript trong < 2.4 giây nhờ incremental AST cache.',
          en: 'Incremental AST caching scans 1,200 TypeScript files in under 2.4 seconds.',
        },
        {
          vi: 'Tích hợp GitHub Action comment trực tiếp sơ đồ ảnh hưởng lên Pull Request.',
          en: 'GitHub Action posts concise impact graphs directly onto Pull Requests.',
        },
        {
          vi: 'Hỗ trợ khai báo quy tắc kiến trúc bằng file YAML đơn giản.',
          en: 'Declarative YAML architecture rules enforce clean domain boundaries.',
        },
      ],
      metrics: [
        { label: { vi: 'Thời gian quét repo', en: 'Scan Latency' }, value: '2.4s' },
        { label: { vi: 'Cộng đồng sử dụng', en: 'GitHub Stars' }, value: '1.8k+' },
        { label: { vi: 'Giảm lỗi import vòng', en: 'Circular Cycles' }, value: '-91%' },
      ],
      codeSnippet: {
        filename: 'detectCycles.ts',
        code: `export function findCircularPaths(graph: Map<string, string[]>) {
  const visiting = new Set<string>();
  const visited = new Set<string>();
  const cycles: string[][] = [];

  const dfs = (node: string, stack: string[]) => {
    visiting.add(node);
    for (const dep of graph.get(node) ?? []) {
      if (visiting.has(dep)) cycles.push([...stack.slice(stack.indexOf(dep)), dep]);
      else if (!visited.has(dep)) dfs(dep, [...stack, dep]);
    }
    visiting.delete(node);
    visited.add(node);
  };
  graph.forEach((_, key) => !visited.has(key) && dfs(key, [key]));
  return cycles;
}`,
      },
    },
  },
  {
    id: 'veloce-storefront',
    year: '2024',
    category: 'frontend',
    categoryLabel: { vi: 'E-Commerce UI', en: 'E-Commerce UI' },
    title: 'Veloce Edge Storefront',
    tagline: {
      vi: 'Cửa hàng thương mại điện tử Headless với bộ tùy biến sản phẩm tức thì',
      en: 'Headless edge storefront with instant live variant & spec configurator',
    },
    summary: {
      vi: 'Trải nghiệm mua sắm siêu mượt đạt điểm Lighthouse 100/100 với bộ lọc tức thì, giỏ hàng optimistic UI và ISR caching.',
      en: 'Sub-second headless storefront scoring 100/100 Lighthouse with instant faceted filtering and optimistic cart mutations.',
    },
    role: { vi: 'Lead Frontend Developer', en: 'Lead Frontend Developer' },
    timeline: '3 tháng · 2024',
    teamSize: { vi: '3 kỹ sư', en: '3 engineers' },
    impactBadge: { vi: '100/100 Lighthouse', en: '100/100 Lighthouse' },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redis'],
    mockupType: 'storefront',
    imageUrl: '/images/project-veloce.jpg',
    imageAlt: {
      vi: 'Không gian lập trình và tối ưu hiệu năng storefront Veloce trên MacBook Pro',
      en: 'Veloce Edge Storefront frontend optimization setup on a MacBook Pro',
    },
    liveUrl: 'https://example.com/veloce',
    repoUrl: 'https://github.com',
    caseStudy: {
      challenge: {
        vi: 'Trang thương mại điện tử truyền thống mất >3 giây phản hồi mỗi khi người dùng đổi màu sắc, cấu hình hoặc lọc thuộc tính sản phẩm.',
        en: 'Traditional monolithic storefronts took 3+ seconds to re-render variant combinations and multi-attribute filters.',
      },
      solution: {
        vi: 'Áp dụng Next.js Incremental Static Regeneration kết hợp Redis edge cache và Optimistic UI cho toàn bộ thao tác giỏ hàng.',
        en: 'Combined Next.js ISR with Redis edge caching and optimistic local mutations for zero-wait cart and filter updates.',
      },
      architectureHighlights: [
        {
          vi: 'Prefetch thông minh các biến thể kế tiếp khi người dùng hover vào lựa chọn.',
          en: 'Intent-based prefetching warms variant payloads on pointer hover.',
        },
        {
          vi: 'URL state synchronization giúp chia sẻ chính xác cấu hình sản phẩm qua link.',
          en: 'URL-synced configurator state makes custom builds instantly shareable.',
        },
        {
          vi: 'Tối ưu hình ảnh AVIF/WebP responsive giúp tiết kiệm 64% băng thông di động.',
          en: 'Responsive AVIF/WebP image pipeline reduced mobile payload by 64%.',
        },
      ],
      metrics: [
        { label: { vi: 'Lighthouse Score', en: 'Lighthouse Score' }, value: '100/100' },
        { label: { vi: 'Thời gian chuyển trang', en: 'Route Transition' }, value: '< 80ms' },
        { label: { vi: 'Tăng giá trị giỏ hàng', en: 'AOV Uplift' }, value: '+19%' },
      ],
      codeSnippet: {
        filename: 'useOptimisticCart.ts',
        code: `export function useOptimisticCart(initialItems: CartItem[]) {
  const [items, setItems] = useState(initialItems);
  const [optimisticItems, addOptimistic] = useOptimistic(
    items,
    (state, nextItem: CartItem) => [...state, nextItem]
  );
  return { optimisticItems, addOptimistic, syncServer: setItems };
}`,
      },
    },
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2024 — Hiện tại / Present',
    role: {
      vi: 'Senior Full-Stack Engineer',
      en: 'Senior Full-Stack Engineer',
    },
    company: 'NovaCloud Systems',
    location: { vi: 'TP.HCM · Hybrid', en: 'Ho Chi Minh City · Hybrid' },
    summary: {
      vi: 'Dẫn dắt kiến trúc frontend và dịch vụ telemetry thời gian thực cho nền tảng quản trị hạ tầng cloud phục vụ hơn 120 doanh nghiệp.',
      en: 'Leading frontend architecture and real-time telemetry services for a cloud observability SaaS serving 120+ enterprise teams.',
    },
    highlights: [
      {
        vi: 'Thiết kế lại kiến trúc React + WebSocket giúp giảm 65% mức tiêu thụ RAM trình duyệt.',
        en: 'Re-architected React + WebSocket data layer, reducing client memory footprint by 65%.',
      },
      {
        vi: 'Xây dựng Design System nội bộ và thiết lập tiêu chuẩn code review TypeScript cho đội ngũ 14 kỹ sư.',
        en: 'Built internal Design System and TypeScript engineering standards across 14 engineers.',
      },
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets'],
  },
  {
    id: 'exp-2',
    period: '2022 — 2024',
    role: {
      vi: 'Full-Stack Developer',
      en: 'Full-Stack Developer',
    },
    company: 'FinBridge Asia',
    location: { vi: 'Singapore · Remote', en: 'Singapore · Remote' },
    summary: {
      vi: 'Phát triển cổng thanh toán B2B, dashboard đối soát dòng tiền và hệ thống webhook đa tiền tệ.',
      en: 'Developed B2B payment gateway flows, merchant settlement dashboards, and multi-currency webhook pipelines.',
    },
    highlights: [
      {
        vi: 'Tối ưu luồng checkout Next.js đạt Core Web Vitals xanh trên 98% phiên truy cập di động.',
        en: 'Optimized Next.js checkout flows to achieve green Core Web Vitals across 98% of mobile sessions.',
      },
      {
        vi: 'Triển khai cơ chế idempotency và hàng đợi Redis xử lý 1.2 triệu giao dịch/tháng.',
        en: 'Implemented idempotent APIs and Redis queues processing 1.2M monthly transactions.',
      },
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Redis', 'PostgreSQL'],
  },
  {
    id: 'exp-3',
    period: '2021 — 2022',
    role: {
      vi: 'Frontend Engineer',
      en: 'Frontend Engineer',
    },
    company: 'CraftStudio Digital',
    location: { vi: 'TP.HCM', en: 'Ho Chi Minh City' },
    summary: {
      vi: 'Xây dựng các web app tương tác cao, landing page sản phẩm công nghệ và dashboard quản trị cho khách hàng quốc tế.',
      en: 'Built interactive web applications, product launches, and analytics portals for international startup clients.',
    },
    highlights: [
      {
        vi: 'Chuyển đổi toàn bộ codebase sang TypeScript strict mode và Vite, rút ngắn thời gian build 4x.',
        en: 'Migrated legacy React apps to strict TypeScript and Vite, cutting build times by 4x.',
      },
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Daniel Phạm',
    role: { vi: 'VP of Engineering', en: 'VP of Engineering' },
    company: 'NovaCloud Systems',
    avatarUrl: '/images/client-1.jpg',
    relationship: {
      vi: 'Quản lý trực tiếp · 2024 – Hiện tại',
      en: 'Direct Manager · 2024 – Present',
    },
    projectTag: 'PulseOps APM',
    quote: {
      vi: '“Minh là kỹ sư hiếm hoi vừa làm chủ kiến trúc React hiệu năng cao ở tầng UI vừa xử lý tốt luồng dữ liệu real-time phía backend. Bản tái cấu trúc WebSocket của Minh đã giúp chúng tôi giữ được 60fps ngay cả khi hệ thống khách hàng tăng tải đột biến.”',
      en: '“Minh is one of the rare engineers who owns both 60fps React rendering and real-time backend ingestion. His WebSocket re-architecture eliminated UI stalls during our largest enterprise traffic spikes.”',
    },
  },
  {
    id: 'test-2',
    name: 'Rachel Tan',
    role: { vi: 'Head of Product', en: 'Head of Product' },
    company: 'FinBridge Asia',
    avatarUrl: '/images/client-2.jpg',
    relationship: {
      vi: 'Đối tác sản phẩm · Singapore',
      en: 'Product Lead · Singapore',
    },
    projectTag: 'PayFlow Ledger',
    quote: {
      vi: '“Làm việc với Minh giúp đội ngũ Product tự tin hơn hẳn khi ra mắt tính năng thanh toán mới. Không chỉ code sạch và đúng hạn, Minh luôn chủ động đề xuất giải pháp UX giúp tăng tỷ lệ hoàn tất đơn hàng trên di động thêm 28%.”',
      en: '“Partnering with Minh gave our product team huge confidence on every payment release. Beyond clean, reliable code, he proactively refined mobile UX flows that lifted checkout conversion by 28%.”',
    },
  },
  {
    id: 'test-3',
    name: 'David Khôi',
    role: { vi: 'Co-Founder & CTO', en: 'Co-Founder & CTO' },
    company: 'Veloce Commerce',
    avatarUrl: '/images/client-4.jpg',
    relationship: {
      vi: 'Khách hàng tư vấn kiến trúc',
      en: 'Advisory Client · CTO',
    },
    projectTag: 'Veloce Edge',
    quote: {
      vi: '“Minh đã giúp team chúng tôi chuẩn hóa Design System và đưa điểm Lighthouse của toàn bộ storefront lên 100/100 chỉ trong 12 tuần. Cách giao tiếp rõ ràng, minh bạch và rất có trách nhiệm với kết quả kinh doanh.”',
      en: '“Minh standardized our Design System and brought our entire storefront to a 100/100 Lighthouse score in 12 weeks. Clear communication, rigorous standards, and strong business ownership.”',
    },
  },
];
