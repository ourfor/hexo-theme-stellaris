// 由 Copilot 转换而成，不保证可用性

const GitHubRepo = props => {
    const {page, theme} = props;
    let repo;
    let branch = 'main';
    if (page.repo) {
        repo = page.repo;
    } else if (page.layout === 'wiki' && page.wiki) {
        let proj = theme.wiki.projects[page.wiki];
        if (proj && proj.repo) {
            repo = proj.repo;
            if (proj.branch !== undefined) {
                branch = proj.branch;
            }
        }
    }
    if (repo === undefined) {
        return <></>;
    }
    return (
        <widget className="widget-wrapper ghrepo">
            <div className="widget-body">
                <div className="items stellar-ghinfo-api" api={theme.api_host.ghapi + '/repos/' + repo}>
                    <a className="repo" href={`https://github.com/${repo}`} target="_blank"
                       rel="external nofollow noopener noreferrer">
                        <div className="repo-name flex-row">
                            <svg aria-hidden="true" role="img" className="color-icon-primary" viewBox="0 0 16 16"
                                 width="1em" height="1em" fill="currentColor"
                                 style={{userSelect: 'none', overflow: 'visible'}}>
                                <path fill-rule="evenodd"
                                      d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                            </svg>
                            {repo}
                        </div>
                        <div className="repo-desc"><span type="text" id="description">&nbsp;</span></div>
                        <div className="grid">
                            <div className="flex-row">
                                <svg aria-hidden="true" role="img" className="color-icon-primary" viewBox="0 0 16 16"
                                     width="1em" height="1em" fill="currentColor"
                                     style={{userSelect: 'none', overflow: 'visible'}}>
                                    <path fill-rule="evenodd"
                                          d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                </svg>
                                <span type="text" id="stargazers_count"></span>
                            </div>
                            <div className="flex-row">
                                <svg aria-hidden="true" role="img" className="color-icon-primary" viewBox="0 0 16 16"
                                     width="1em" height="1em" fill="currentColor"
                                     style={{userSelect: 'none', overflow: 'visible'}}>
                                    <path fill-rule="evenodd"
                                          d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                </svg>
                                <span type="text" id="forks_count"></span>
                            </div>
                            <div className="flex-row stellar-ghinfo-api" index="0"
                                 api={theme.api_host.ghapi + '/repos/' + repo + '/tags'}>
                                <svg aria-hidden="true" role="img" className="color-icon-primary" viewBox="0 0 16 16"
                                     width="1em" height="1em" fill="currentColor"
                                     style={{userSelect: 'none', overflow: 'visible'}}>
                                    <path fill-rule="evenodd"
                                          d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path>
                                </svg>
                                <span type="text" id="latest-tag-name">0</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </widget>
    );
}

module.exports = GitHubRepo;