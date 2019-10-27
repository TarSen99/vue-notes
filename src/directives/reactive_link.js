let componentInstance = null;

const handleClick = (e) => {
  e.preventDefault();
  const el = e.target.closest('a');

  if(!el || !componentInstance) {
    return;
  }

  const link = el.href;
  const relativeLink = getUrl(link);

  componentInstance.$router.push({ path: relativeLink });
};

const getUrl = (handle) => {
  const regex = /https?:\/\/.*(?=\/)(.*)/i;

  const matched = handle.match(regex);

  return matched[1] || '/';
};

export default {
  bind(el, binding, vnode) {
    componentInstance = vnode.context;

    el.addEventListener('click', handleClick)
  },

  unbind(el) {
    el.removeEventListener('click', handleClick)
  }
}
