# guide

직접 만든 Unity 에셋과 셰이더의 사용 설명서. https://nupa.moe/guide/

[tools](https://github.com/nupamo/tools)와 같은 구성(Astro static + Astryx Neutral)입니다. JavaScript는 언어 선택과 다크 모드 토글용 인라인 스크립트뿐입니다.

## 개발 및 배포

Node.js 22.12 이상(CI는 24).

```sh
npm ci
npm run dev
npm run check
npm run build
```

정적 출력은 `dist/`입니다. `main` push 시 GitHub Actions가 검사·빌드 후 GitHub Pages에 배포합니다. 기본값은 `BASE_PATH=/guide/`, `SITE_URL=https://nupa.moe`입니다.

## 구조

- `src/data/guides.ts`: 가이드 목록, 페이지 순서, 언어별 제목·설명, BOOTH 링크. 홈 타일과 왼쪽 페이지 목록이 여기서 나옵니다.
- `src/content/docs/<언어>/<가이드>/<페이지>.md`: 본문. 언어는 `ko`(사이트 루트), `en`, `ja`, `zh`, `zh-tw`. 모든 언어에 같은 파일이 있어야 빌드됩니다.
- `public/`: 이미지. 본문에서는 `/split.png`처럼 루트 기준으로 씁니다(빌드 시 `BASE_PATH`가 붙습니다).

본문 Markdown 규칙:

- 다른 페이지 링크는 상대 경로로 씁니다: `[설치하기](./installation.md)`, `[프리셋](./presets#song-presets)`, `[액자](../photoframe/frame-materials.md)`.
- 제목 id 고정: `## 곡 프리셋 {#song-presets}`.
- 영상: `<div class="video"><iframe src="https://www.youtube.com/embed/…" title="…" allowfullscreen loading="lazy"></iframe></div>`.

새 가이드는 `src/data/guides.ts`에 등록하고 5개 언어의 Markdown을 추가합니다.

## URL

페이지는 `/guide/<가이드>/<페이지>/` 형식입니다. 예전 VitePress 주소(`/guide/<가이드>/<페이지>.html`)는 빌드 시 새 주소로 넘기는 파일을 만들어 그대로 열립니다.
