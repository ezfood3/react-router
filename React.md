# SPA( Single Page Application )
- React, Vue SPA를 지원하는 대표적인 프레임워크 또는 라이브러리
- 최초 화면만 응답받고 이후에는 Json만 받아서 리렌더링
- 단점
  1. 최초 화면 응답시 지연발생 가능 -> code splitting기술로 극복
  2. SEO(Search Engine Optimization)문제 -> SSR(Server Side Rendering)기술로 극복(Next.js)

# 프로젝트 만들기
- yarn create react-app react-router
- cd react-router
- router 라이브러리 설치
  - yarn add react-router-dom
  - yarn add react-router-dom@5.0.0

# router 적용
1. BrowserRouter라는 컴포넌트 사용
  - 적용 index.js
2. App.js에 Route적용
  ```js
  <Routes>
    <Route path='주소규칙' element={보여 줄 컴포넌트 JSX}>
    <Route path="/" element={<Home />}></Route>
  </Routes> // Routes로 감싸 처리
  ```
3. 컴포넌트내에서 해당 주소로 요청할 때
  - <a> 대신에 <Link to='주소'>내용</Link>
4. URL의 파라미터 처리
  - /주소/:파라미터명 -> 컴포넌트의 props처리
  - match 사용 (v5)
  - useParams를 사용 (v6): import {useParams} from 'react-router-dom';
5. URL의 쿼리처리
  - /주소?키1=값1&키2=값2&...
  - qs라이브러리 설치후 사용 (v5)
  - useSearchParams 사용 (v6)
6. navigate
  - location (v5)
  - useNavigate (v6)
7. sub router
  - <Route> <Route /> </Route>
8. NavLink
  - 스타일 적용가능