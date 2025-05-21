export const ProfileText = () => (
  <section className="flex flex-col gap-4 font-kopub font-bold text-black text-lg md:text-xl lg:text-xl max-w-md">
    <p>나의 삶의 가치는 스스로 찾아냅니다.</p>
    <p>개성을 발휘하는 삶을 지향합니다.</p>
    <p>함께 살아가는 방법을 고민합니다.</p>
    <p>기술을 좋아합니다.</p>

    <nav className="flex flex-col gap-2 pt-6">
      <a
        href="https://kokodak.notion.site"
        className="block hover:underline hover:!text-sky-600 transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        이력서
      </a>
      <a
        href="https://blog.naver.com/raylee00"
        className="block hover:underline hover:!text-sky-600 transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        블로그
      </a>
      <a
        href="https://github.com/kokodak"
        className="block hover:underline hover:!text-sky-600 transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </nav>
  </section>
);
