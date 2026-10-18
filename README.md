# 미국주식 장기투자 노트 (GitHub Pages 버전)

핸드폰 홈 화면에 추가해서 쓰는 미국 주식 장기투자 기록 앱입니다. 로그인 없이 열리고, 입력한 내용은 각자 기기의 브라우저에 저장됩니다.

## 올리는 방법
1. GitHub에서 새 저장소(Public)를 만듭니다.
2. 이 폴더의 파일을 전부 올립니다: `index.html`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `updates.json`, `README.md`
3. 저장소 Settings → Pages → Branch를 `main`, 폴더를 `/ (root)`로 두고 Save.
4. 1~2분 뒤 `https://<계정>.github.io/<저장소>/` 주소가 열립니다. 이 주소를 카톡으로 보내고, 핸드폰에서 열어 "홈 화면에 추가"를 하면 됩니다.

## 공유 데이터 갱신
`updates.json`의 `briefs`(오늘의 브리프), `macro`(거시 스냅샷), `gurus`(대가 13F), `stocks`(종목 소개·참고 수치)를 바꿔서 커밋하면, 사람들이 다음에 앱을 열 때 반영됩니다. 사용자가 "확인됨"으로 표시한 종목은 덮어쓰지 않습니다.

## 자동 업데이트
매일 아침 07:20(한국시간) Claude 예약 작업이 `updates.json`에 전날 미국 장마감 브리프를 넣어 커밋합니다. 앱은 다음에 열 때 자동으로 새 브리프를 받습니다.
