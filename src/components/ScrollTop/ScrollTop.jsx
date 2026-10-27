import './ScrollTop.css';

const scrollTopMarkup = `<button class="btn-scroll-top-left" id="btnScrollTop" onclick="scrollToTop()" title="Ir al inicio">
<i class="fa-solid fa-chevron-up"></i>
</button>`;

export default function ScrollTop() {
  return <div dangerouslySetInnerHTML={{ __html: scrollTopMarkup }} />;
}
