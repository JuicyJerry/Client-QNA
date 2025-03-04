import React, { createContext, useContext, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import logo from "../imgs/logo.svg"; // 로고 경로 맞게 수정!

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const Spinner = styled.svg`
  width: 100px;
  height: 100px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
`;

const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerWrapper>
      <Spinner viewBox="0 0 300 300">
        <svg
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          id="svg442580"
          viewBox="0 0 1024 768"
          height="300px"
          width="300px"
          version="1.1"
        >
          <g id="logo-group">
            <path
              id="path442589"
              fill="#0051ff"
              stroke="#0051ff"
              d="m 481.26444,-32.184 c 0,-10.152 -7.776,-19.152 -18.216,-19.152 -10.44,0 -18.216,9 -18.216,19.152 v 14.328 c 0,10.152 7.776,19.08 18.216,19.08 2.376,0 3.096,0.36 4.68,1.728 l 5.112,4.176 c 3.456,2.736 5.04,4.032 7.992,5.184 1.512,0.576 3.24,0.936 4.968,0.936 h 3.312 c 1.512,0 2.736,-1.296 2.736,-2.88 v -4.68 c 0,-1.584 -1.224,-2.808 -2.736,-2.808 h -3.24 c -2.088,0 -3.456,-1.008 -6.984,-4.032 -0.432,-0.36 -0.72,-0.648 -1.224,-1.08 l -2.088,-1.8 c 3.672,-3.6 5.688,-8.568 5.688,-13.824 z m -25.92,0 c 0,-4.176 3.312,-8.424 7.704,-8.424 4.392,0 7.776,4.248 7.776,8.424 v 14.328 c 0,4.248 -3.384,8.352 -7.776,8.352 -4.392,0 -7.704,-4.104 -7.704,-8.352 z"
              transform="translate(0 339.796) translate(240.0524769148937 -52.67199999999998) scale(3) translate(-444.83244 51.336)"
            ></path>

            <path
              id="path442591"
              fill="#002980"
              stroke="#002980"
              d="m 519.92619,-1.656 c 0.72,1.08 1.728,1.656 2.88,1.656 h 5.256 c 1.8,0 3.24,-1.512 3.24,-3.384 V -47.88 c 0,-1.656 -1.152,-2.88 -2.664,-2.88 h -4.608 c -1.512,0 -2.736,1.224 -2.736,2.88 v 26.928 l -15.768,-28.152 c -0.72,-1.08 -1.656,-1.656 -2.88,-1.656 h -5.184 c -1.8,0 -3.24,1.512 -3.24,3.384 V -2.88 c 0,1.656 1.224,2.88 2.736,2.88 h 4.536 c 1.584,0 2.736,-1.224 2.736,-2.88 v -26.856 z"
              transform="translate(0 339.796) translate(433.2217269148936 -50.944) scale(3) translate(-494.22219 50.76)"
            ></path>

            <image
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAFJtJREFUeF7tnXnct0MVxq9KRIhIi/ZCe1JJIZJCZWmRopS0aBEtlCJLKC2KtCpaLG1SSRsqoUUKUSpSQivtFNrub++89fO8z+/5zdz3mXubc/7h8z4z133mmrl+9zJnzrmJ3JwBZ2AqAzdxbpwBZ2A6Ay4QXx3OwAIMuEB8eTgDLhBfA85APQb8DlKPN+9VCAMukH5N9KbBnVP75Va53rhA+jP3zMXZwZ2H9setsj1xgfRn/reV9PHgDv//yf64Vq4nLpB+zP1Skn4gac3gzo8l3VfSP/vhXrleuED6MffPk/S+Oa7wb+/vh3vleuEC6X7ul5V0saTV57hyhaQ1JP29exfL9cAF0v3c7ynpkClu8Lc3d+9iuR64QLqd+5UkXSpp5Slu/F7S3SX9qVs3y726C6TbuT9Y0l4zXKDNa7t1s9yru0C6m/vbSfqppOVmuHCNpHtK+nV3rpZ7ZRdId3P/LkkvjLw8bV8c2dabGTLgAjEkMwHqHpIuknTzyD43SLp3uONEdvFmFgy4QCxYTMc4XtLTErvRZ/vEPt68IQMukIYE1ui+tqTvSUrl/t+SHiTp/BrX9C41GUidpJqX8W4TDHxB0uY1GaHv42r29W41GHCB1CCtQZeNJH2tQX+6gvH1hhjePZIBF0gkUUbNvilpvYZYYDyiIYZ3j2TABRJJlEGzbSSdaIADBFifMcJymAUYcIG0szxuKumC6rzHfYwuR2j8AyT9ywjPYaYw4AJpZ2k8W9LRxpcC80PGmA43hwEXSP4lsYwkDkDdxfhSl4UDVtcb4zrcBAMukPzLYXdJb8t0GbAPy4TtsDU2q5y0NAZWCOEht0nrFt36d5IIW/lLdA9vmMSA30GS6EpuvH/1Iv265F5pHbjGfmldvHUsAy6QWKbS23HX4DDU8uldk3pw9+Auwt3EzZgBF4gxoRNwvBu8NB/8jZC5Fu8jbsYMuECMCQ1wfLH6iaSl88AvgXqdpLUk8WXLzZABF4ghmRNQ7E/smAd6KirXZG/EzZABF4ghmQHqfiEknd3zNo1ddXbX2WV3M2LABWJE5ATMZyVtaQ8bhci1t45q6Y2iGHCBRNEU3Ygo27OiW+dpiA9E/LoZMOACMSBxAoJzGhvaQiaj4QNnRtwMGHCBGJAYIDjpd7IdXCMkfOH0oVtDBlwgDQkM3eHx3Oq8xwNt4BqjnCdpHUmcY3drwIALpAF5E113qJK7HWMDZYaCT8eZoRUK5AJpPvHktvpRyKHbHM0OgayN5NIip5ZbTQZcIDWJm+hGxsMjmsNkQcA3sjK61WTABVKTuNDtlpIukUSe3T4a+XwJZLy2j84NwScXSLNZIuv6gc0gsvfGRzLEu9VgwAVSg7TQZZUQzr5ifYhWelJbhBoj1BpxS2TABZJI2ETzt1Qn+V5Rv/u8Pb8cTnk+xhgXX/cwxiwCzgVSb5rvGOoK3qJe93l7sWdBfXTm5DuGuEBR55AaI1ca444ezgVSb4qpPrtzva5Te1EXnfroGP//ZGN8fKZyrlsCAy6QBLJCUw4mEVJ+s/SuU3tQD50wefZTsHtJujDDNai9Tgoit0gGXCCRRE00y/HrftQ8dyT+bad09xbsMXmXMoYeJ5wLJG1eeUc4O63LzNYcl6Ue+uVzWt45HNsl8ZylMYZzLAHHjOUCSZvd06rSA5ukdZnZ+u1VmeeXTWnF33abiZDWgDFsmtal3NYukPi559Mrn2Et7a9hj2Jayp5cqYMYy6mWAxkrlgskbmbhiUerh8Q1j251QBWSvu+M1rTZJxoxriGPWDxquc1gwAUSt0T4/PrxuKbRra4Kd49ZaUPZqScBHTv3lsaYeGl3W4ABF8js5bFU+Ky75uymSS3YhT80sscrJb05sm1sM/J28dn3H7EdSmznApk968+X9N7ZzZJaXBG+XLHDHWPs2BM1vHpM44Q2jO3IhPbFNXWBLDzly4aQEuuFyY42O9splkOohJ4QghIr1BR/R9HWBbLwNO4p6RDjmebRhlJs7J6nGI96Pwx3npR+s9oyRuvHt1nXHMzfXSDTp2ql8HK8svFsbtfghf9pVQ7e4439IQyecHjC4t3mMOACmb4kOGS0l/GKIfPJgxtkG2G+vidpbWO/GCsHq9xcIFFr4PbhpXi5qNbxjbao6qR/Mb75vC1z5N/iSC5Hczmi6zbBgN9B5l8O764Wyy7GK+V0SRsbYZ5R7YRvYIS1GIYxv8gYc/BwLpAlp5CvOhdVZ815KbY0y5y5iAORWBrpgUgTRLogt8CAC2TJpcBLMC/DlnZS9e6wlSVgSHPK45alMfbtLQGHjuUCufEMPqgqXfBd4+q/1O3gpfoC48UCJi/slnPIsV9SlpK61M2Y3DEQygv0ZsYDObZ64X+GMeZiuBx3OzjgY4KbC+RGa4AX6K8arwqe6zk+S7BhDsv1vgQXfFQo3ixvz0Mnk6Iz6xkPoo0vQ8SJEYZiaXDBR4XizQWyaAlsU5UuONF4NbC3wC/8r4xx58IRJ0Ygo2UKosWcfCaz772Hd4FIFNvkBZr4KEsjhuvVloALYBFLRUi8pZG5haKgfGQo1lwgi0onH228Av4Y4pv+YIw7DS5XGlS4obx0sVa6QMgYQnQtGUQs7TWS3mAJGIHFsVyO51raZVVwJHnAyLxSpJUuELKJxJ7qi10gXZUcWD7sgq8W62hkOzgiu0qRVrJAVgifX1c1nvmXSHqnMWYsHCmCrBczGVcIZJx1dj7Wx0G1K1kg+1cvoK8znq2fhUeSrsqe5XpkhKv9jLkaBFypAuExhKA8Hkssbcfq1/YjloA1sEhXStpSS+PuwV1kWv4uy2v1CqtUgRwuaVfjmSDZNGWgu/4sSlJtPlsTmWtpcGad5dHSvyxYJQrkriHD+dLGjLLZ2JeNNUonWOe8ur4qK03qI75sFWMlCuTD1ePVM41n+FuSHm6M2RSOIjzWmSDh7llNHRtS/9IEQg2O86v9AnbPLe2xGQIdm/pH/t3PNwWZ05/HR3bX2WUvwkoTyGer8x5bFjGz+QYJh1vng+8XckkCWb9K+39mv+gfrDdw+Y3Bep/geEkCyZHoIIHqUTWFy0eOakRTBlOKQB5fvbB+roQJbXGMcGr9jtOi+3GXKkEgjJEz1rxcutkxwMcOzvBzjn20VoJAdqgOLh0z2hnsdmBwe1y3LuS9+tgFcvNQWpncs272DBCuw459V7Fn9iOagzh2gRBZ+47sLJZ9gS6jl7MzP2aB3DIEJN42O4tlX4DzL5y9v2aMNIxZIHtLev0YJ62HY4Lrg3roV2OXxiqQXGe0GxM+UgBqi/CeR62RUdlYBfKW6gQcRTLd2mMAzvdo73LtXGmMArlTSMRgnSeqnRkZ7lWoc7iGJAqUjsbGKJAPSHrOaGZoWAOB++cOy+WFvR2bQMiDy8k+TtW5tc8AhUmpvf7j9i+d54pjE8gJkp6UhypHjWSAOXhKZNveNxuTQB4q6ezeM16Gg8zFOWMY6pgEcpqkTcYwKSMYA3Ox6QjGYVqdqEs+OPL6pQwO8ExdguV4Z2NOThk6eWO4gzAGEhRQf9zSTq4eE55gCdhjrBx3Xx6x1h16OPwYBPLUKqL0Y8aLL1ddQWM3zeByvb8xN58w87IDoKELhFLNZNggX5OlkR2RLIklGQvZ+usTmfP57PuPoRI5dIFQeowSZJZGgjRS/v/cEnQAWPzI8GNjXR+eOTpyAOOf18UhC2TZUHrsDsbkHyZpd2PMocDlqHd4ZQhB+dtQSJj0c8gCeVVVl++NxqQXm6Q58MiPzcWSljPmlbl6kzFmK3BDFchKobbHysYs7ZuhSpOxi9nhDq4qSu1lfBVK0REOT2m6QdlQBUJ5M+sCmb8JKf5HeTIuYVXeKvz43DqhT0xT5ozSdIOyIQrk9uHdw/oxYNRnqxNXJRVzqZxraZTFpsYIR3QHY0MUyLsrkncxZnj02TkS+eIsDZ9oOVtjaczdiywBc2MNTSAkB7gow6fI7atPu8fnJntg+Jyp4XyHpbEfQpqgSyxBc2INTSAfrQSynTEh54YwlVFnCKzBWa5KVczh02v400mXIQmENJfflcwDLDfPFOjYyYQaX5SqWScaY/JDtE5IB2sMbQ83JIF8UdJmxhR8RdKjjTHHBneWpEcYD4q53MIYMwvcUASycaYKTkSbEgnsNp2BDatzNl/PQBBzenoGXFPIoQiEGoAPMx35oiKX2xpjjhWO0hGUO7C0PtZ1XGJ8QxDIE6vSBZ+ynJkQXUqUKZ8y3WYzcP/wzmBd25G5/fTsy3fXou8C4UvK9yXdx5ii90l6gTHm2OFyVAf+oSTE13Vt+alz13eB7CTpKOOVR1Qp+ym/NMYdO1yu+vLM8Qf7Sl6fBbJMeAS6szF5RABbB+MZu9hbuLdL2s3Yu8vC+ZvrjHFN4PoskJdJOtRklP8HIbky8UCDiyo15qEu3KqhpMSKdQGm9GOuEV/vrK8CYQKIj2JCLI3kyiRZdqvPwD4ZjgRcFcLhOY/TK+urQA6QxERY2uXh7DpJlt3qM5CrMBFzznmcXlkfBbJauHssb8zUzhle+I1dHAzci6u7+xHG3v413EV+Z4zbCK6PAjlc0q6NRrVkZyKA+ZxYSiI4Y/qWgKM4KpzyPmdpzL31R4BG/vVNILk+JfZ+Q6rRLHbTmYhc6xLQZJQhuwpftnphfRNIjs2ob2YItuvF5HXsBGuH6GqirC2NNfAsS8AmWH0SSK5wBqJ1cwTbNeF9LH3Jv0uKVktjV/2Boc6LJW4trD4J5KSCcuHWmqyCOrEWturDePsikPWrdPln9oEQ96E3DLAmvtG1N30RyBmSNuiaDL9+rxhgTTyya4/6IBDOGXDewM0ZmMsAa+PzXdLStUA4X3Be2KPokge/dj8Z4KjD2l3WGOlaIM+oNpsoNeDmDExjgDVybFf0dCkQdmMpF3y3rgbv1x0EA5dKorz3DV1426VASPX5ji4G7dccHAOdpYXtSiC5IkIHN/PucBQD5PPlFGjricW7Esjekl4fRY03cgYWMcCaOahtMroQyCohvb71qbS2ufPrtcvAn0M4/NVtXrYLgbxV0svbHKRfazQMsHYozdCatS0Q0umTi4r0+m7OQCoDnAZdQ9IVqR3rtm9bIKTTJ62+mzNQlwHW0HPrdk7t16ZAqAtxQfVyTjI4N2egLgOcCr2fpB/VBUjp16ZASB/KyT43Z6ApA6ylJzcFienflkDIov7tGIe8jTMQyUArmfnbEgh1OB4VOXBv5gzEMNBKbZc2BMKxzC/FjNjbOAOJDLC2Tknsk9Q8t0DAp0DNg5O8mt14MBWKZg+lmBZflUTRHEs7pzovwqNWtvqSuQXy1Kqq6ccsGQlkkEnjfGNch8vLAAWQKJpjbayxT1iDLsbLKZClJFH/gY0dS+NsAGcE3IbHwAlVvZcnGbvNxjPFkCgxbW45BUKBmvcYe0xiMc4G/MwY1+HaYYC5uzDDXhhrjaJI5pZLIMuGYvF3MPaY8yMvNcZ0uHYZODLDTviV4UmF4kimlksgr6rirShUY2kkNyYX7G8tQR2rdQZWl3SxJH5ELY019yZLQLByCGTlkJ2d/1ra/hXYfpaAjtUZA4dI2tP46n8I4fCmxZFyCIQ7B2q2NO4anCjrXYEVy0EWhLVSOBNk/SNqXl7PWiC8c1yS4fbJe4efXx+XgriDcCextGvDD+mvrECtBcJXK+vyynyx4usHX7DcxsMA7yC8i/BOYmmswRdaAVoKhEcgiqqw/2FpneZFshyIYy3BAOc6+KplaeyHcLSCJ5nGZimQj1YC2a6xRzcGYLecXfNsoQTG/jpcGgOcDWJfhCcES2MtUuCnsVkJZJ2qdAFxMVZ4iwf2OElfaDxKB+gzA+yss8NuafygEv93blNQqwVNtC6RlZZ2eobgNkv/HMuOAWK0iNWyNNbk5k0BLQTCOQ9i861tPT9kZU1pb/E2qn4Mv5bBO9ZmI1wLgeRQf2tHKjNMikPWY4AyB1vU6zq1F2vz4U0wmwqEM+YsZktr9VC+peOO1YgB6hLyztB0Tc51olGF4ybO8AWCLCV8UrO090t6niWgYw2GgWOqvZEdjL3lyMUDJPHDm2xNBEJ+K3IUWRrRmJwfITrTrTwGKIVBOp+ljYfOWj26DmZdgSwTdkHJlGhpRGNax3FZ+udY+Rk4XNKuxpf5haQ1JV2XiltXIOTWJU+qpRGFeXdJRGW6lcvAbUI0+ArGFLBm35aKWUcgZGX/qaRVUy82o/2rMwSvGbvocC0xsG91HeujDVeFH+CkiPA6AjmgeuHZx5iobCfCjP10uHYYWD78CK9mfDnWLuKLtlSB4DB3DwZgaXy14uuVmzOwmAHeQ3gfsbTkU6mpAuFMBvXiLI2vFiQjrvUZztIRx+oVA3zJYm1YF3lNymuQIpBcn+BIQmy92dirmXZnajPAngh7I5bGuaK1JP08BjRFINQzt85HRUJrYq7cnIH5GGB9srvOLrulsZZ3jAGMFcj9JZ0n6aYxoAltGgeTJVzLmw6TAeKziNOytH8F0XEWZUGLFchJ1XmPJ8wC8787AwNigDW91Sx/YwSygaQzZgH5352BATLA2j5rIb9jBHJmlWJ+/QEO3l12BmYxwNresIlAeKziVuTmDIyVAdb4ydMGt9AdhBdyXsx5QXdzBsbKwPclrT0tMchCAuGTLp/D3JyBsTMwNbXUNIHk2sUcO9E+vmEycGlIPXTDXPenCSRHHMwwqXOvS2GANX9EjEByRVKWQrSPc5gM/CaU17hm0v357iCEshMW7OYMlMYAa//AhQSySkhLz6EoN2egNAb+HA5VXb144HPvIByj5WiimzNQKgNo4JXzCYQEDKSjJyGDmzNQKgN/DwkeLoeAyTvIUZJ2KpUVH7czMMEAWth5UiAkfyMJHMng3JyB0hn4X3bPxXcQTvSRotHNGXAGFjHw3/zQCGRdz6Lua8IZmJeBdRHIlyVt4gQ5A87AEgycFnMexHlzBoplwAVS7NT7wGMYcIHEsORtimXABVLs1PvAYxhwgcSw5G2KZcAFUuzU+8BjGPgPrr6b1a7gUJEAAAAASUVORK5CYII="
              id="icon"
              x="541"
              y="-52"
              width="54.38297872340425"
              height="54.38297872340425"
              transform="translate(0 339.796) translate(620.7985869148935 -52.02399999999999) scale(3) translate(-541.74781 51.12)"
            ></image>
          </g>
        </svg>
      </Spinner>
    </SpinnerWrapper>
  );
};

// 전역 상태 관리
interface LoadingContextValue {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

// 로딩 context 생성
const LoadingContext = createContext<LoadingContextValue | null>(null);

// 로딩 Provider
export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log("[spinner] isLoading ---> ", isLoading);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading ? <LoadingSpinner /> : children}
    </LoadingContext.Provider>
  );
};

// 로딩 상태 쉽게 가져올 수 있는 HOOK
export const useLoading = () => {
  const context = useContext(LoadingContext);
  console.log("[LoadingSpinner]context ===> ", context);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export default LoadingSpinner;
